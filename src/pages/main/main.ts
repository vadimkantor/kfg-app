import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {RatesPage} from "../rates/rates";
import {ProfilePage} from "../profile/profile";
import {AuthProvider} from '../../providers/auth/auth';
import {AdminPage} from "../admin/admin";
import {SlideboxProvider} from "../../providers/slidebox/slideprovider";
import {Storage} from '@ionic/storage';
import {LoadingController } from 'ionic-angular';
import {SvnewsPage} from "../svnews/svnews";
import {SubstitutionsPage} from "../substitutions/substitutions";


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
  private slides: Array<any> = [];
  private classNo: string = '';

  constructor(private navCtrl: NavController, private auth: AuthProvider,
              private slideboxProvider: SlideboxProvider,
              private storage: Storage,
              private loadingCtrl: LoadingController) {

    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Bitte warten...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
  }

  ionViewDidEnter() {
    this.slideboxProvider.getSlidebox()
      .on('value', slideSnapshot => {
        this.slides = [];
        slideSnapshot.forEach(snap => {
          this.slides.push(
            snap.val()
          );
          return false
        });
      });

    this.auth.getUserData().on('value', authSnapshot => {
      this.userName = authSnapshot.val().name;
      this.isSchoolAdmin = authSnapshot.val().isSchoolAdmin;
      this.isClassAdmin = authSnapshot.val().isClassAdmin;
      this.school = authSnapshot.val().school;
      this.storage.set("school", this.school);
      this.classNo=authSnapshot.val().classNo;
      this.storage.set("classNo", this.classNo);
      this.slideboxProvider.getSchoolSlidebox(this.school)
        .on('value', slideSnapshot => {
          slideSnapshot.forEach(snap => {
            this.slides.push(
              snap.val()
            );
            return false
          });
        });
    });

  }


  logout() {
    this.storage.remove('email');
    this.storage.remove('password');
    this.auth.logoutUser();
    this.navCtrl.setRoot(LoginPage);
  }

  goToRatesPage() {
    this.navCtrl.push(RatesPage);
  }

  goToSVNews() {
    this.navCtrl.push(SvnewsPage);
  }

  goToSubstitutionPage(){
    this.navCtrl.push(SubstitutionsPage);
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
