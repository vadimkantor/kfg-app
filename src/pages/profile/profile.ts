import {Component} from '@angular/core';
import {AlertController, IonicPage} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Storage} from '@ionic/storage';

@IonicPage({
  name: 'profile'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public classNo: string;
  public name: string;
  public saveForm: FormGroup;


  constructor(private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private storage: Storage) {

    this.name = '';
    this.classNo = '';

    this.storage.get('name').then((nameValue) => {
      this.name = nameValue;
      this.storage.get('classNo').then((classNoValue) => {
        this.classNo = classNoValue;
      });

    });

    this.saveForm = this.formBuilder.group({
      name: this.name,
      classNo: this.classNo
    });

  }


  saveUser() {
    this.storage.set('name', this.saveForm.value.name);
    this.storage.set('classNo', this.saveForm.value.classNo);
    let alert = this.alertCtrl.create({
      message: this.saveForm.value.name + ", Deine Daten wurden gespeichert",
      buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

}

