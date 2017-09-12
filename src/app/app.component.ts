import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MainPage } from "../pages/main/main";
import { Auth } from '@ionic/cloud-angular';

import firebase from 'firebase';

declare var FCMPlugin;
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

      if(typeof(FCMPlugin) !== "undefined"){
        FCMPlugin.getToken(function(t){
          console.log("Use this token for sending device specific messages\nToken: " + t);
        }, function(e){
          console.log("Uh-Oh!\n"+e);
        });

        FCMPlugin.onNotification(function(d){
          if(d.wasTapped){
            alert(d);
            // Background recieval (Even if app is closed),
            //   bring up the message in UI
          } else {
            alert(d);
            // Foreground recieval, update UI or what have you...
          }
        }, function(msg){
          // No problemo, registered callback
        }, function(err){
          console.log("Arf, no good mate... " + err);
        });
      } else console.log("Notifications disabled, only provided in Android/iOS environment");


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

