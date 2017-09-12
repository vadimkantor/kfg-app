import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {MainPage} from "../pages/main/main";
import {Auth} from '@ionic/cloud-angular';
import {FCM} from '@ionic-native/fcm';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: Auth,
              private fcm: FCM) {

    firebase.initializeApp({
      apiKey: "AIzaSyDHm8_PhwCJKfmvuEFouVU-PSLEoS-0egw",
      authDomain: "schooladvisor-prod.firebaseapp.com",
      databaseURL: "https://schooladvisor-prod.firebaseio.com",
      projectId: "schooladvisor-prod",
      storageBucket: "schooladvisor-prod.appspot.com"
    });

    platform.ready().then(() => {
      if (platform.is('cordova')) {
        alert("Hallo!");
        fcm.subscribeToTopic('all').catch(e => console.log('Error subscribing to topic', e));
        fcm.getToken().then(token => {
          alert("Use this token for sending device specific messages\nToken: " + token);
        });
        fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            alert("Received in background:" + data);
          } else {
            alert("Received in foreground:" + data);
          }
        });
        fcm.unsubscribeFromTopic('all');
      } else {
        console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      }
      statusBar.styleDefault();
      splashScreen.hide();

      if (this.auth.isAuthenticated()) {
        this.rootPage = MainPage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

