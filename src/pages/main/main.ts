import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import {ProfilePage} from "../profile/profile";
import {AuthProvider} from '../../providers/auth/auth';
import {AdminPage} from "../admin/admin";
import {SlideboxProvider} from "../../providers/slidebox/slideprovider";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private userName: string = '';
  private school: string = '';
  private isSchoolAdmin: boolean = false;
  private isClassAdmin: boolean = false;
  private slides: Array<any>;


  constructor(private navCtrl: NavController, private auth: AuthProvider, private slideboxProvider: SlideboxProvider) {
  }

  ionViewDidEnter() {
    this.auth.getUserData().on('value', snapshot => {
      this.userName = snapshot.val().name;
      this.isSchoolAdmin = snapshot.val().isSchoolAdmin;
      this.isClassAdmin = snapshot.val().isClassAdmin;
      this.school = snapshot.val().school;
    });

    this.slideboxProvider.getSlidebox(this.school)
      .on('value', snapshot => {
        this.slides = [];
        snapshot.forEach(snap => {
          this.slides.push(
            snap.val()
          );
          return false
        });
      });
  }

  logout() {
    this.auth.logoutUser();
    this.navCtrl.setRoot(LoginPage);
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  isUserSchoolAdmin() {
    return this.isSchoolAdmin;
  }

  isUserClassAdmin() {
    return this.isClassAdmin;
  }

  goToAdmin() {
    this.navCtrl.push(AdminPage);
  }
}
