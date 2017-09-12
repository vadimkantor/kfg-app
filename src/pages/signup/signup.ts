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
import {ChecksumValidator} from '../../validators/checksum';
import {MainPage} from '../main/main';
import {Storage} from '@ionic/storage';

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

  constructor(private navCtrl: NavController, private authProvider: AuthProvider,
              private formBuilder: FormBuilder, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private storage: Storage) {

    this.signupForm = formBuilder.group({
      name: '',
      school: '',
      classNo: '',
      checksum: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      remember: [true, null]
    }, {validator: ChecksumValidator.isValid('school','classNo', 'checksum')});
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
            if (this.signupForm.value.remember) {
              this.storage.set('email', this.signupForm.value.email);
              this.storage.set('password', this.signupForm.value.password);
            }
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
