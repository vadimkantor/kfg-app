import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  public fireAuth: firebase.auth.Auth;
  public userProfileRef: firebase.database.Reference;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfileRef = firebase.database().ref('/userProfiles');
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(name: string, school: string, classNo: string, email: string, password: string,
             isSchoolAdmin: boolean,
             isClassAdmin: boolean): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then(newUser => {
      this.userProfileRef.child(newUser.uid).set({
        id: newUser.uid,
        email: email,
        name: name,
        classNo: classNo,
        school: school,
        isSchoolAdmin: isSchoolAdmin,
        isClassAdmin: isClassAdmin
      });
    });
  }

  getUserData(): firebase.database.Reference {
    return this.userProfileRef.child(this.fireAuth.currentUser.uid);
  }

  resetPassword(email: string): firebase.Promise<void> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<void> {
    this.userProfileRef.child(this.fireAuth.currentUser.uid).off();
    return this.fireAuth.signOut();
  }
}
