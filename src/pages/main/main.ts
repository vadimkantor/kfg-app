import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import {ProfilePage} from "../profile/profile";
import {AuthProvider} from '../../providers/auth/auth';
import {AdminPage} from "../admin/admin";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private userName: string = '';
  private isSchoolAdmin: boolean=false;
  private isClassAdmin: boolean=false;

  slides = [
    {
      title: "Wilkommen bei School-Advisor!",
      description: "Diese Anleitung hilft Dir bei der Bedingung und zeigt Dir wir Du Klassenarbeiten bewerten und Dir die Ergebnisse ansehen kannst",
      image: "assets/img/schooladvisor-slidebox-img-1.png",
    },
    {
      title: "Was ist School-Advisor?",
      description: "<b>SchoolAdvisor</b> ist ein...",
      image: "assets/img/schooladvisor-slidebox-img-1.png",
    },
    {
      title: "Wie bewerte ich eine Klassenarbeit?",
      description: "In <b>School-Advisor</b> kannst Du ...",
      image: "assets/img/schooladvisor-slidebox-img-1.png",
    }
  ];

  constructor(private navCtrl: NavController, private auth: AuthProvider) {
  }

  ionViewDidEnter() {
    this.auth.getUserData().on('value',snapshot => {
      this.userName = snapshot.val().name;
      this.isSchoolAdmin=snapshot.val().isSchoolAdmin,
        this.isClassAdmin=snapshot.val().isClassAdmin;
    });
  }

  logout() {
    this.auth.logoutUser();
    this.navCtrl.setRoot(LoginPage);
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  isUserSchoolAdmin(){
    return this.isSchoolAdmin;
  }

  isUserClassAdmin(){
    return this.isClassAdmin;
  }
  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }
}
