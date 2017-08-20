import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RatePage} from '../rate/rate';
import {ResultPage} from '../result/result';
import {EventsProvider} from '../../providers/events/events';
import {RatesProvider} from '../../providers/rates/rates';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private userId: string ='';
  private classNo: string = '';
  private school: string = '';
  private eventList: Array<any>;

  constructor(private navCtrl: NavController, private eventsProvider: EventsProvider,
              private ratesProvider: RatesProvider, private auth:AuthProvider) {
    auth.getUserData().on('value',snapshot => {
      this.userId = snapshot.val().id;
      this.classNo=snapshot.val().classNo;
      this.school=snapshot.val().school;
    });
  }

  ionViewDidEnter() {
    this.eventsProvider.getEvents(this.school, this.classNo).on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach(snap => {
        if(snap.val().hidden!==true) {
          this.eventList.push({
            id: snap.key,
            name: snap.val().name,
            date: snap.val().date,
            dateTo: snap.val().dateTo
          })
        };
        return false
      });
    });
  }

  goToRate(event) {
    let readOnly=this.isRated(event);
    this.navCtrl.push(RatePage, {
      'eventId': event.id,
      'eventDate': event.date,
      'eventDateTo': event.dateTo,
      'eventName': event.name,
      'eventReadOnly': readOnly
    });
  }

  goToResult(event) {
    this.navCtrl.push(ResultPage, {
      'eventId': event.id,
      'eventName': event.name,
      'eventDate': event.date

    });
  }

  isRated(event) {
    let exists = false;
    this.ratesProvider.getUserRates(this.school, this.classNo, this.userId, event.id).on('value', snapshot => {
      if (snapshot.val() !== null){
        exists=true;
      }
    });
    return exists;
  }

  isRateable(event) {
    let curDate = new Date();
    if (!event.date || typeof event.date === 'undefined' || !event.dateTo || typeof event.dateTo === 'undefined') {
      return false;
    }
    let eventDateParts = event.date.toString().split('.');
    let eventDate = new Date(eventDateParts[2], eventDateParts[1] - 1, eventDateParts[0]);
    let eventDateToParts = event.dateTo.toString().split('.');
    let eventDateTo = new Date(eventDateToParts[2], eventDateToParts[1] - 1, eventDateToParts[0]);
    return curDate >= eventDate && curDate < eventDateTo;
  }

  isResultable(event) {
    let curDate = new Date();
    if (!event.dateTo || typeof event.dateTo === 'undefined') {
      return false;
    }
    let eventDateToParts = event.dateTo.toString().split('.');
    let eventDateTo = new Date(eventDateToParts[2], eventDateToParts[1] - 1, eventDateToParts[0]);
    return curDate >= eventDateTo;
  }

}



