import {Component} from '@angular/core';
import {IonicPage, AlertController} from 'ionic-angular';
import {ProfileProvider} from '../../providers/profile/profile';


@IonicPage({
  name: 'profile'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private userProfile: any;
  private classNo: string;
  private school: string;
  private name: string;

  constructor(private alertCtrl: AlertController,
              private profileProvider: ProfileProvider) {
  }

  ionViewDidEnter() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.name = userProfileSnapshot.val().name;
      this.school = userProfileSnapshot.val().school;
      this.classNo = userProfileSnapshot.val().classNo;
    });
  }

  save(name: string, school: string, classNo: string) {
    this.profileProvider.updateProfile(name, school.toUpperCase(), classNo.toUpperCase()).then(() => {
      let alert = this.alertCtrl.create({
        message: "Profil geändert",
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });
  }

}

