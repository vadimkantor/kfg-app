import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule} from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RatePage } from '../pages/rate/rate';
import { ResultPage } from '../pages/result/result';
import { EventsProvider } from '../providers/events/events';
import { SubjectsProvider } from '../providers/subjects/subjects';
import { DatePipe } from '@angular/common';
import { Ionic2RatingModule } from 'ionic2-rating';
import { RatesProvider } from '../providers/rates/rates';
import { MainPage} from "../pages/main/main";
import { AuthProvider } from '../providers/auth/auth';
import { ProfilePage } from '../pages/profile/profile';
import { AdminPage} from '../pages/admin/admin';
import { ProfileProvider } from '../providers/profile/profile';
import { CreateEventPage } from '../pages/create-event/create-event';
import { NgPipesModule } from 'ngx-pipes';
import { ChangeEventPage } from '../pages/change-event/change-event';
import { SlideboxProvider } from '../providers/slidebox/slideprovider';

const cloudSettings: CloudSettings ={
  'core':{
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
    HomePage,
    LoginPage,
    RatePage,
    ResultPage,
    ProfilePage,
    AdminPage,
    CreateEventPage,
    ChangeEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    Ionic2RatingModule,
    NgPipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    HomePage,
    LoginPage,
    RatePage,
    ResultPage,
    ProfilePage,
    AdminPage,
    CreateEventPage,
    ChangeEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    EventsProvider,
    RatesProvider,
    AuthProvider,
    ProfileProvider,
    DatePipe,
    SubjectsProvider,
    SlideboxProvider
  ]
})
export class AppModule {}
