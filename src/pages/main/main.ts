import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController} from 'ionic-angular';

import {ProfilePage} from "../profile/profile";
import {SlideboxProvider} from "../../providers/slidebox/slideprovider";
import {Storage} from '@ionic/storage';
import {SvnewsPage} from "../svnews/svnews";
import {SubstitutionsPage} from "../substitutions/substitutions";


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private slides: Array<any> = [];

  constructor(private navCtrl: NavController,
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


  }


  goToSVNews() {
    this.navCtrl.push(SvnewsPage);
  }

  goToSubstitutionPage() {
    this.navCtrl.push(SubstitutionsPage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }


}
