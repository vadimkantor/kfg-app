import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {MainPage} from "../pages/main/main";
import {Auth} from '@ionic/cloud-angular';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: Auth) {

    /*
     * test environment

    firebase.initializeApp({
      apiKey: "AIzaSyBclD-SGEt6RHOi0iyKmvlUTx0Li67H8vA",
      authDomain: "schooladvisor-f8834.firebaseapp.com",
      databaseURL: "https://schooladvisor-f8834.firebaseio.com",
      projectId: "schooladvisor-f8834",
      storageBucket: "schooladvisor-f8834.appspot.com"
    });
    */

    firebase.initializeApp({
      apiKey: "AIzaSyDHm8_PhwCJKfmvuEFouVU-PSLEoS-0egw",
      authDomain: "schooladvisor-prod.firebaseapp.com",
      databaseURL: "https://schooladvisor-prod.firebaseio.com",
      projectId: "schooladvisor-prod",
      storageBucket: "schooladvisor-prod.appspot.com"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(this.auth.isAuthenticated()){
        this.rootPage=MainPage;
      }else{
        this.rootPage=LoginPage;
      }
    });
  }
}

