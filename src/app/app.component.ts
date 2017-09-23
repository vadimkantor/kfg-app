import {Component} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {MainPage} from "../pages/main/main";
import {Auth} from '@ionic/cloud-angular';
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
              public auth: Auth,
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
      this.initPushNotification();

      if (this.auth.isAuthenticated()) {
        this.rootPage = MainPage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  initPushNotification() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    if (typeof FCMPlugin != 'undefined') {
      FCMPlugin.getToken(
        function (token) {
          console.log(token);
          alert(token);
        },
        function (err) {
          console.log('error retrieving token: ' + err);
        }
      );
    }
    FCMPlugin.onNotification(
      function (data) {
        if (data.wasTapped) {
          //Notification was received on device tray and tapped by the user.
          alert(JSON.stringify(data));
        } else {
          //Notification was received in foreground. Maybe the user needs to be notified.
          alert(JSON.stringify(data));
        }
      },
      function (msg) {
        console.log('onNotification callback successfully registered: ' + msg);
      },
      function (err) {
        console.log('Error registering onNotification callback: ' + err);
      }
    );
  }


}

