import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RatePage } from '../pages/rate/rate';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ionic2RatingModule } from 'ionic2-rating';

const cloudSettings: CloudSettings ={
  'core':{
    'app_id': 'c33774e3'
  }
};

export const firebaseConfig = {
  apiKey: "AIzaSyBclD-SGEt6RHOi0iyKmvlUTx0Li67H8vA",
  authDomain: "schooladvisor-f8834.firebaseapp.com",
  databaseURL: "https://schooladvisor-f8834.firebaseio.com",
  projectId: "schooladvisor-f8834",
  storageBucket: "schooladvisor-f8834.appspot.com"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
