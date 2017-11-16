import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RatePage} from '../rate/rate';
import {ResultPage} from '../result/result';
import {EventsProvider} from '../../providers/events/events';
import {RatesProvider} from '../../providers/rates/rates';
import {AuthProvider} from '../../providers/auth/auth';
import {DatePipe} from '@angular/common';
import {ReversePipe} from 'ngx-pipes/src/app/pipes/array/reverse';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'rates.html',
  providers: [ReversePipe]
})
export class RatesPage {
  private userId: string ='';
  private classNo: string = '';
  private school: string = '';
  private eventList: Array<any>;

  constructor(private navCtrl: NavController, private eventsProvider: EventsProvider,
              private ratesProvider: RatesProvider, private auth:AuthProvider,
              private datepipe: DatePipe, private reversePipe: ReversePipe,
              private loadingCtrl: LoadingController) {
    this.presentLoading();
  }

  ionViewDidEnter() {

    this.auth.getUserData().on('value',snapshot => {
      this.userId = snapshot.val().id;
      this.classNo=snapshot.val().classNo;
      this.school=snapshot.val().school;
    });

    this.eventsProvider.getEvents(this.school, this.classNo)
      .on('value', snapshot => {
        this.eventList = [];
        snapshot.forEach(snap => {
          if(snap.val().hidden!==true) {
            this.eventList.push({
              id: snap.key,
              name: snap.val().name,
              date: snap.val().date,
              dateTo: snap.val().dateTo,
              teacherCode: snap.val().teacherCode
            })
          };
          return false
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

  goToRate(event) {
    let readOnly=this.isRated(event);
    this.navCtrl.push(RatePage, {
      'eventId': event.id,
      'eventDate': event.date,
      'eventDateTo': event.dateTo,
      'eventName': event.name,
      'eventTeacherCode': event.teacherCode,
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
    let eventDate= new Date(event.date);
    let eventDateTo= new Date(event.dateTo);
    return curDate >= eventDate && curDate < eventDateTo;
  }

  isResultable(event) {
    let curDate = new Date();
    if (!event.dateTo || typeof event.dateTo === 'undefined') {
      return false;
    }
    let eventDateTo= new Date(event.dateTo);
    return curDate >= eventDateTo;
  }

}



