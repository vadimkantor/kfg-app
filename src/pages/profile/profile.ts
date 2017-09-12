import {Component} from '@angular/core';
import {IonicPage, AlertController} from 'ionic-angular';
import {ProfileProvider} from '../../providers/profile/profile';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ChecksumValidator} from '../../validators/checksum';

@IonicPage({
  name: 'profile'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private userProfile: any;
  public classNo: string;
  public school: string;
  public name: string;
  public saveForm: FormGroup;

  constructor(private alertCtrl: AlertController,
              private profileProvider: ProfileProvider,
              private formBuilder: FormBuilder) {

    this.saveForm = this.formBuilder.group({
      name: '',
      school: '',
      classNo: '',
      checksum: ['', Validators.compose([Validators.required])]
    }, {validator: ChecksumValidator.isValid('school', 'classNo', 'checksum')});


  }

  ionViewDidEnter() {

    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.name = userProfileSnapshot.val().name;
      this.school = userProfileSnapshot.val().school;
      this.classNo = userProfileSnapshot.val().classNo;
    });

  }

  saveUser() {

    this.profileProvider.updateProfile(this.saveForm.value.name,
      this.saveForm.value.school.toUpperCase(),
      this.saveForm.value.classNo.toUpperCase()).then(() => {
      let alert = this.alertCtrl.create({
        message: "Die Daten wurden gespeichert",
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });
  }

}

