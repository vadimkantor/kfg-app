import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {EventsProvider} from '../../providers/events/events';
import {ResultPage} from '../result/result';
import {CreateEventPage} from "../create-event/create-event";
import {ChangeEventPage} from "../change-event/change-event";
import {LoadingController, AlertController} from 'ionic-angular';


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
  private isClassAdmin: boolean = false;

  constructor(private navCtrl: NavController,
              private auth: AuthProvider,
              private eventsProvider: EventsProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
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
      this.isClassAdmin = snapshot.val().isClassAdmin;
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
          hidden: snap.val().hidden,
          teacherCode: snap.val().teacherCode
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

  goToCreateEventPage() {
    this.navCtrl.push(CreateEventPage);
  }

  goToChangeEvent(event) {
    this.navCtrl.push(ChangeEventPage, {
      'eventId': event.id,
      'eventDate': event.date,
      'eventDateTo': event.dateTo,
      'eventName': event.name,
      'eventTeacher': event.teacherCode
    });
  }

  isHidden(event) {
    return event.hidden;
  }

  hideEvent(event) {
    this.eventsProvider.hideEvent(this.school, this.classNo, event.id);
  }

  deleteEvent(event) {
    let alert = this.alertCtrl.create({
      title: 'Achtung!',
      message: 'Bist Du sicher, dass Du den Test ' + event.name + ' ' + event.date + ' löschen möchtest?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log("canceled");
          }
        },
        {
          text: 'Ja',
          handler: () => {
            this.eventsProvider.deleteEvent(this.school, this.classNo, event.id);
          }
        }
      ]
    });
    alert.present();

  }

  unhideEvent(event) {
    this.eventsProvider.unhideEvent(this.school, this.classNo, event.id);
  }


}
