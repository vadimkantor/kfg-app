import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {RatesProvider} from '../../providers/rates/rates';
import {HomePage} from '../home/home';
import {AuthProvider} from '../../providers/auth/auth';

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
  private criteria: Array<any>;
  private rates: Array<number>;
  private currentRates: Array<number>;
  private userId: string = '';
  private classNo: string = '';
  private school: string = '';

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private auth: AuthProvider,
              private ratesProvider: RatesProvider) {
    this.eventId = this.navParams.get("eventId");
    this.eventDate = this.navParams.get("eventDate");
    this.eventName = this.navParams.get("eventName");
    this.eventReadOnly = this.navParams.get("eventReadOnly");

  }

  ionViewDidEnter() {
    this.auth.getUserData().on('value', snapshot => {
      this.userId = snapshot.val().id;
      this.classNo = snapshot.val().classNo;
      this.school = snapshot.val().school;
    });

    this.rates = [];
    this.currentRates = [];

    this.ratesProvider.getCriteria().on('value', snapshot => {
      this.criteria = [];
      snapshot.forEach(snap => {
        this.criteria.push({
          id: snap.key,
          criterion: snap.val().criterion,
          description: snap.val().description
        });
        this.rates.push(0);
        this.currentRates.push(0);
        return false
      });
    });


    this.ratesProvider.getUserRates(this.school,
      this.classNo, this.userId, this.eventId).on('value', snapshot => {
      let i: number = 0;
      snapshot.forEach(snap => {
        this.rates.splice(i, 1,
          snap.val()
        );
        i++;
        return false
      });
    });


    this.ratesProvider.getCurrentRates(
      this.school,
      this.classNo,
      this.eventId).on('value', snapshot => {

      let i: number = 0;
      snapshot.forEach(snap => {
        this.currentRates.splice(i, 1,
          snap.val()
        );
        i++;
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
      this.rates);

    for (let i = 0; i < this.rates.length; i++) {

      if (this.currentRates[i] === 0) {
        this.currentRates[i] = this.rates[i];
      }

      this.currentRates[i] = ((this.currentRates[i] + this.rates[i]) / 2.0);
    }

    this.ratesProvider.saveCurrentRates(
      this.school,
      this.classNo,
      this.eventId,
      this.currentRates);

    this.navCtrl.setRoot(HomePage);
  }


}
