import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController, AlertController} from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events';
import {AuthProvider} from '../../providers/auth/auth';
import {SubjectsProvider} from '../../providers/subjects/subjects';
import {TeachersProvider} from "../../providers/teachers/teachers";

@IonicPage()
@Component({
  selector: 'page-change-event',
  templateUrl: 'change-event.html',
})
export class ChangeEventPage {
  private classNo: string = '';
  private school: string = '';
  private eventId: string = '';
  private eventSubjectName: string = '';
  private eventDate: string = '';
  private eventDateTo: string = '';
  private eventTeacherCode: string = '';
  private subjects: Array<string>;
  private teachers;

  constructor( private navParams: NavParams,
              private eventsProvider: EventsProvider, private auth: AuthProvider,
              private subjectsProvider: SubjectsProvider,
              private teachersProvider: TeachersProvider,
              private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

    this.auth.getUserData().on('value', snapshot => {
      this.school = snapshot.val().school;
      this.classNo = snapshot.val().classNo;
    });

    this.eventId = this.navParams.get("eventId");
    this.eventSubjectName = this.navParams.get("eventName");
    this.eventDate = this.navParams.get("eventDate");
    this.eventDateTo = this.navParams.get("eventDateTo");
    this.eventTeacherCode = this.navParams.get("eventTeacher")

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

    this.teachersProvider.getTeachers(this.school)
      .on('value', snapshot => {
        this.teachers = [];
        snapshot.forEach(snap => {
          this.teachers.push({
              code: snap.val().Code,
              name: snap.val().Name
            }
          );
          return false
        });
      });
  }

  changeEvent() {
    this.eventsProvider.changeEvent(
      this.eventId,
      this.eventSubjectName,
      this.school,
      this.classNo,
      this.eventDate,
      this.eventDateTo,
      this.eventTeacherCode).then(() => {
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
