import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {RatesProvider} from '../../providers/rates/rates';
import {RatesPage} from '../rates/rates';
import {AuthProvider} from '../../providers/auth/auth';
import {LoadingController, AlertController} from 'ionic-angular';

@IonicPage({
  name: 'rate',
  segment: 'rate/:eventId'
})
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class RatePage {

  private eventId: string = '';
  private eventName: string = '';
  private eventDate: string = '';
  private eventReadOnly: boolean;
  private criteriaWithRates: Array<any>;
  private currentRates: Array<any>;
  private userId: string = '';
  private classNo: string = '';
  private school: string = '';

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private auth: AuthProvider,
              private ratesProvider: RatesProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

    this.eventId = this.navParams.get("eventId");
    this.eventDate = this.navParams.get("eventDate");
    this.eventName = this.navParams.get("eventName");
    this.eventReadOnly = this.navParams.get("eventReadOnly");
    this.presentLoading();
  }


  presentLoading() {
    this.loadingCtrl.create({
      content: 'Bitte warten...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
  }

  ionViewDidEnter() {
    this.auth.getUserData().on('value', snapshot => {
      this.userId = snapshot.val().id;
      this.classNo = snapshot.val().classNo;
      this.school = snapshot.val().school;
    });


    this.currentRates = [];
    this.criteriaWithRates = [];

    this.ratesProvider.getCriteria(this.school).on('value', criteriaSnapshot => {

      criteriaSnapshot.forEach(criteriaSnap => {
        let rateVal: number = 0;
        let subjectName: string;
        this.ratesProvider.getUserRates(this.school,
          this.classNo, this.userId, this.eventId).on('value', ratesSnapshot => {
          ratesSnapshot.forEach(ratesSnap => {
              if (ratesSnap.key === criteriaSnap.key) {
                rateVal = ratesSnap.val().rate;
              }
              return false;
            }
          )
        });

        this.criteriaWithRates.push({
          critId: criteriaSnap.key,
          criterion: criteriaSnap.val().criterion,
          description: criteriaSnap.val().description,
          rate: rateVal,
          subject: this.eventName
        });

        return false;
      });
    });


    this.ratesProvider.getCurrentRates(
      this.school,
      this.classNo,
      this.eventId).on('value', snapshot => {
      snapshot.forEach(snap => {
        this.currentRates.push(
          snap.val()
        );
        return false
      });
    });
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  saveRates() {
    this.ratesProvider.saveUserRates(
      this.school,
      this.classNo,
      this.userId,
      this.eventId,
      this.criteriaWithRates
    ).then(() => {
      console.log("user rates saved");
    });

    for (let i = 0; i < this.criteriaWithRates.length; i++) {
      let curRate = 0;
      let count = 0;
      if (typeof this.currentRates[i] === 'undefined') {
        curRate = this.criteriaWithRates[i].rate;
      } else {
        curRate = this.currentRates[i].rate;
        count = this.currentRates[i].count;
      }
      this.currentRates[i] = this.criteriaWithRates[i];
      this.currentRates[i].rate = ((curRate + this.criteriaWithRates[i].rate) / 2.0);
      this.currentRates[i].count = count + 1;
    }

    this.ratesProvider.saveCurrentRates(
      this.school,
      this.classNo,
      this.eventId,
      this.criteriaWithRates);

    this.navCtrl.push(RatesPage);
  }

  showDescription(desc: string) {
    let alert = this.alertCtrl.create({
      title: 'Hilfe',
      message: desc,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.present();
  }
}
