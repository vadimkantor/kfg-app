import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileProvider {
  public userProfile:firebase.database.Reference;
  public currentUser:firebase.User;

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfiles/${user.uid}`);
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateProfile(name: string, school: string, classNo: string): firebase.Promise<void> {
    return this.userProfile.update({
      name: name,
      classNo: classNo,
      school: school
    });
  }


  updateEmail(newEmail: string, password: string): firebase.Promise<any> {
    const credential =  firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, password);

    return this.currentUser.reauthenticateWithCredential(credential).then( user => {
      this.currentUser.updateEmail(newEmail).then( user => {
        this.userProfile.update({ email: newEmail });
      });
    });
  }

  updatePassword(newPassword: string, oldPassword: string): firebase.Promise<any> {
    const credential =  firebase.auth.EmailAuthProvider
      .credential(this.currentUser.email, oldPassword);

    return this.currentUser.reauthenticateWithCredential(credential).then( user => {
      this.currentUser.updatePassword(newPassword).then( user => {
        console.log("Password Changed");
      }, error => {
        console.log(error);
      });
    });
  }
}
