import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {EventsProvider} from '../../providers/events/events';
import {ResultPage} from '../result/result';
import {CreateEventPage} from "../create-event/create-event";
import {ChangeEventPage} from "../change-event/change-event";
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  private userName: string = '';
  private classNo: string = '';
  private school: string = '';
  private eventList: Array<any>;

  constructor(private navCtrl: NavController,
              private auth: AuthProvider,
              private eventsProvider: EventsProvider,
              private loadingCtrl: LoadingController) {
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
      this.userName = snapshot.val().name;
      this.school = snapshot.val().school;
      this.classNo = snapshot.val().classNo;
    });

    this.eventsProvider.getEvents(this.school, this.classNo).endAt('date')
      .limitToLast(50).on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach(snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          date: snap.val().date,
          dateTo: snap.val().dateTo,
          hidden:snap.val().hidden
        });
        return false
      });
    });
  }

  goToResult(event) {
    this.navCtrl.push(ResultPage, {
      'eventId': event.id,
      'eventName': event.name,
      'eventDate': event.date

    });
  }

  goToCreateEventPage(){
    this.navCtrl.push(CreateEventPage);
  }

  goToChangeEvent(event){
    this.navCtrl.push(ChangeEventPage, {
      'eventId': event.id,
      'eventDate': event.date,
      'eventDateTo': event.dateTo,
      'eventName': event.name
    });
  }

  isHidden(event){
    return event.hidden;
  }
  hideEvent(event){
    this.eventsProvider.hideEvent(this.school, this.classNo, event.id);
  }

  unhideEvent(event){
    this.eventsProvider.unhideEvent(this.school, this.classNo, event.id);
  }
}
