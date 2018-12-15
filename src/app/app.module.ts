import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {CloudModule, CloudSettings} from '@ionic/cloud-angular';
import {MyApp} from './app.component';
import {DatePipe} from '@angular/common';
import {Ionic2RatingModule} from 'ionic2-rating';
import {MainPage} from "../pages/main/main";
import {ProfilePage} from '../pages/profile/profile';
import {NgPipesModule} from 'ngx-pipes';
import {SlideboxProvider} from '../providers/slidebox/slideprovider';
import {IonicStorageModule} from '@ionic/storage';
import {SubstitutionsProvider} from '../providers/substitutions/substitutions';
import {SubstitutionsPage} from '../pages/substitutions/substitutions';
import {SvnewsPage} from "../pages/svnews/svnews";
import {SvnewsProvider} from '../providers/svnews/svnews';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c33774e3'
  }
};

declare var window;

export class AppErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    window.Ionic.handleNewError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ProfilePage,
    SubstitutionsPage,
    SvnewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    Ionic2RatingModule,
    NgPipesModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ProfilePage,
    SubstitutionsPage,
    SvnewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    DatePipe,
    SlideboxProvider,
    SubstitutionsProvider,
    SvnewsProvider
  ]
})
export class AppModule {
}
