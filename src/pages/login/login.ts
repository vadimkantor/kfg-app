import {Component} from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  AlertController
} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {EmailValidator} from '../../validators/email';
import {AuthProvider} from '../../providers/auth/auth';
import {MainPage} from '../main/main';
import {Storage} from '@ionic/storage';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public authProvider: AuthProvider,
              public formBuilder: FormBuilder, private storage: Storage) {

    let userEmail: string = '';
    let userPassword: string = '';
    this.storage.get('email').then((emailVal) => {
      userEmail = emailVal;
      this.storage.get('password').then((passwordVal) => {
        userPassword = passwordVal;
        this.loginForm = this.formBuilder.group({
          email: [userEmail, Validators.compose([Validators.required, EmailValidator.isValid])],
          password: [userPassword, Validators.compose([Validators.minLength(6), Validators.required])],
          remember: [true, null]
        });
      });
    });
    this.loginForm = this.formBuilder.group({
      email: [userEmail, Validators.compose([Validators.required, EmailValidator.isValid])],
      password: [userPassword, Validators.compose([Validators.minLength(6), Validators.required])],
      remember: [true, null]
    });
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {
          this.loading.dismiss().then(() => {
            if (this.loginForm.value.remember) {
              this.storage.set('email', this.loginForm.value.email);
              this.storage.set('password', this.loginForm.value.password);
            } else {
              this.storage.remove('email');
              this.storage.remove('password');
            }
            this.navCtrl.setRoot(MainPage);
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });

      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  goToSignup(): void {
    this.navCtrl.push('signup');
  }

  goToResetPassword(): void {
    this.navCtrl.push('reset-password');
  }

}


