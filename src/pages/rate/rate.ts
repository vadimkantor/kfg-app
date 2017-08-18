import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';
import {RatesProvider} from '../../providers/rates/rates';
import {HomePage} from '../home/home';


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


  constructor(private navCtrl: NavController, private navParams: NavParams, private user: User,
              private ratesProvider: RatesProvider) {
    this.eventId = this.navParams.get("eventId");
    this.eventDate = this.navParams.get("eventDate");
    this.eventName = this.navParams.get("eventName");
    this.eventReadOnly=this.navParams.get("eventReadOnly");
  }

  ionViewDidEnter() {

    this.rates = [];
    this.currentRates = [];
    this.criteria = [];
    this.ratesProvider.getCriteria().on('value', snapshot => {
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


    this.ratesProvider.getUserRates(this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId).on('value', snapshot => {

      let i: number = 0;
      snapshot.forEach(snap => {
        this.rates.splice(i, 1,
          snap.val()
        );
        i++;
        return false
      });
    });



    this.ratesProvider.getCurrentRates(this.user.data.get('school'),
      this.user.data.get('classNo'),
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
      this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId,
      this.rates);

    for(let i=0; i<this.rates.length; i++){

       if( this.currentRates[i] === 0){
         this.currentRates[i]= this.rates[i];
       }

      this.currentRates[i] = ((this.currentRates[i] + this.rates[i])/2.0);
    }

    this.ratesProvider.saveCurrentRates(
      this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.eventId,
      this.currentRates);


    this.navCtrl.setRoot(HomePage);
  }


}
