import {Component} from '@angular/core';
import {SubstitutionsProvider} from '../../providers/substitutions/substitutions';

import { LoadingController } from 'ionic-angular';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-substitutions',
  templateUrl: 'substitutions.html',
})
export class SubstitutionsPage {

  private substitutions: Array<any>;

  constructor(
              private  substitutionsProvider: SubstitutionsProvider,
              private loadingCtrl: LoadingController,
              private storage: Storage) {
    this.presentLoading();



  }

  ionViewDidLoad() {
    let classNo: string = '';
    let school: string = '';
    this.storage.get('classNo').then((classVal) => {
      classNo = classVal;
      this.storage.get('school').then((schoolVal) => {
        school = schoolVal;

        this.substitutionsProvider.getSchoolSubstitutions(school)
          .on('value', snapshot => {
            this.substitutions = [];
            snapshot.forEach(snap => {
                if(snap.val().Klasse.includes(classNo)) {
                  this.substitutions.push({
                    Art: snap.val().Art,
                    Datum: snap.val().Datum,
                    Klasse: snap.val().Klasse,
                    Stunde: snap.val().Stunde,
                    Vertreter: snap.val().Vertreter,
                    FachNeu: snap.val().FachNeu,
                    FachAlt: snap.val().FachAlt,
                    Raum: snap.val().Raum
                  });
                }
              return false
            });
          });


      });
    });


  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Bitte warten...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
  }
}
