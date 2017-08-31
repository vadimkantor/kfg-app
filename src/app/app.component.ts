import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MainPage } from "../pages/main/main";
import { Auth } from '@ionic/cloud-angular';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: Auth) {

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

      if(this.auth.isAuthenticated()){
        this.rootPage=MainPage;
      }else{
        this.rootPage=LoginPage;
      }
    });
  }
}

