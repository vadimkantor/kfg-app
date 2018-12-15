import {Component} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainPage} from "../pages/main/main";
import firebase from 'firebase';

declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public alertCtrl: AlertController) {

    firebase.initializeApp({
      apiKey: "AIzaSyDHm8_PhwCJKfmvuEFouVU-PSLEoS-0egw",
      authDomain: "schooladvisor-prod.firebaseapp.com",
      databaseURL: "https://schooladvisor-prod.firebaseio.com",
      projectId: "schooladvisor-prod",
      storageBucket: "schooladvisor-prod.appspot.com"
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      console.log("STARTED!!");
      this.rootPage = MainPage;
    });
  }





}

