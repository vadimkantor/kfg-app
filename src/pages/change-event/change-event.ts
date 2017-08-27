import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController, AlertController} from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events';
import {AuthProvider} from '../../providers/auth/auth';
import {SubjectsProvider} from '../../providers/subjects/subjects';

@IonicPage()
@Component({
  selector: 'page-change-event',
  templateUrl: 'change-event.html',
})
export class ChangeEventPage {
  private classNo: string = '';
  private school: string = '';
  private eventId: string = '';
  private eventName: string = '';
  private eventDate: string = '';
  private eventDateTo: string = '';
  private subjects: Array<string>;

  constructor( private navParams: NavParams,
              private eventsProvider: EventsProvider, private auth: AuthProvider,
              private subjectsProvider: SubjectsProvider,
              private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

    this.auth.getUserData().on('value', snapshot => {
      this.school = snapshot.val().school;
      this.classNo = snapshot.val().classNo;
    });

    this.eventId = this.navParams.get("eventId");
    this.eventName = this.navParams.get("eventName");
    this.eventDate = this.navParams.get("eventDate");
    this.eventDateTo = this.navParams.get("eventDateTo");

    this.subjectsProvider.getSubjects(this.school)
      .on('value', snapshot => {
        this.subjects = [];
        snapshot.forEach(snap => {
          this.subjects.push(
            snap.val()
          );
          return false
        });
      });

  }

  changeEvent() {
    this.eventsProvider.changeEvent(
      this.eventId,
      this.eventName,
      this.school,
      this.classNo,
      this.eventDate,
      this.eventDateTo).then(() => {
      let alert = this.alertCtrl.create({
        message: "Klassenarbeit geändert",
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
