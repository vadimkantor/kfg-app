import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController
} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthProvider} from '../../providers/auth/auth';
import {EmailValidator} from '../../validators/email';
import {MainPage} from '../main/main';

@IonicPage({
  name: 'signup'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider,
              public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      name: '',
      school: '',
      classNo: '',
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authProvider.signupUser(
        this.signupForm.value.name,
        this.signupForm.value.school.toUpperCase(),
        this.signupForm.value.classNo.toUpperCase(),
        this.signupForm.value.email,
        this.signupForm.value.password,
        false,
        false
        )
        .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(MainPage);
          });
        }, (error) => {
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


}
