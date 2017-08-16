import {Component} from '@angular/core';
import {IonicPage, AlertController, NavController ,LoadingController} from 'ionic-angular';
import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showLogin: boolean = true;
  email: string = '';
  password: string = '';
  name: string = '';
  school: string = '';
  classNo: string = '';


  constructor(private navCtrl: NavController, private auth: Auth, private user: User, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }


  /*
    for both of these, if the right form is showing, process the form,
    otherwise show it
    */
  doLogin() {
    if (this.showLogin) {
      console.log('process login');

      if (this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title: 'Anmeldungsfehler',
          subTitle: 'Alle Felder sind erforderlich!',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      let loader = this.loadingCtrl.create({
        content: "Anmeldung..."
      });
      loader.present();

      this.auth.login('basic', {'email': this.email, 'password': this.password}).then(() => {
        console.log('ok i guess?');
        loader.dismissAll();
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        loader.dismissAll();
        console.log(err.message);

        let errors = '';
        if (err.message === 'UNPROCESSABLE ENTITY') errors += 'Email ist nicht korrekt.<br/>';
        if (err.message === 'UNAUTHORIZED') errors += 'Kennwort ist erfolrderlich.<br/>';

        let alert = this.alertCtrl.create({
          title: 'Login Fehler',
          subTitle: errors,
          buttons: ['OK']
        });
        alert.present();
      });
    } else {
      this.showLogin = true;
    }
  }

  doRegister() {
    if (!this.showLogin) {
      console.log('process register');

      /*
      do our own initial validation
      */
      if (this.name === '' || this.email === '' || this.password === '' || this.school === '' ||  this.classNo === '') {
        let alert = this.alertCtrl.create({
          title: 'Anmeldungsfehler',
          subTitle: 'Alle Felder sind erforderlich!',
          buttons: ['OK']
        });
        alert.present();
        return;
      }
      let userSchoolData = {'school': this.school, 'classNo': this.classNo};
      let details: UserDetails = {'email': this.email, 'password': this.password, 'name': this.name, 'custom': userSchoolData};
      console.log(details);

      let loader = this.loadingCtrl.create({
        content: "Registrierung..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok signup');
        this.auth.login('basic', {'email': details.email, 'password': details.password}).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(HomePage);
        });

      }, (err: IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for (let e of err.details) {
          console.log(e);
          if (e === 'required_email') errors += 'Email ist erforderlich.<br/>';
          if (e === 'required_password') errors += 'Kennwort ist erforderlich.<br/>';
          if (e === 'conflict_email') errors += 'Ein Benutzer mit dieser Email Adresse existiert bereits.<br/>';
          //don't need to worry about conflict_username
          if (e === 'invalid_email') errors += 'Ihre Email ist nicht korrekt.';
        }
        let alert = this.alertCtrl.create({
          title: 'Registrierungsfehler',
          subTitle: errors,
          buttons: ['OK']
        });
        alert.present();
      });

    } else {
      this.showLogin = false;
    }
  }
}


