import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RatesProvider} from '../../providers/rates/rates';
import {AuthProvider} from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  private classNo: string = '';
  private school: string = '';
  private eventId: string = '';
  private eventName: string = '';
  private eventDate: string = '';
  private results: Array<any>;
  private avg: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider,
              private ratesProvider: RatesProvider,
              private loadingCtrl: LoadingController) {
    this.eventId = this.navParams.get("eventId");
    this.eventName = this.navParams.get("eventName");
    this.eventDate = this.navParams.get("eventDate");
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
      this.classNo = snapshot.val().classNo;
      this.school = snapshot.val().school;
    });



    this.ratesProvider.getCurrentRates(
      this.school,
      this.classNo,
      this.eventId).on('value', snapshot => {
      this.results = [];
      this.avg = 0;
      let i = 0;
      let sum: number = 0;
      snapshot.forEach(snap => {
        i = i + 1;
        sum = sum + snap.val().rate;
        this.results.push({
            "criterion": snap.val().criterion,
            "rate": snap.val().rate,
            "count": snap.val().count
          }
        );
        this.avg = sum / i;
        return false;
      });
    });

  }

}
