import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events';
import {AuthProvider} from '../../providers/auth/auth';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {SubjectsProvider} from '../../providers/subjects/subjects';

@IonicPage({
  name: 'create-event'
})
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  public createEventForm: FormGroup;
  private classNo: string = '';
  private school: string = '';
  private subjects: Array<string>;

  constructor(private navCtrl: NavController,
              private eventsProvider: EventsProvider,
              private subjectsProvider: SubjectsProvider,
              private auth: AuthProvider,
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController) {

    this.createEventForm = formBuilder.group({
      eventName: ['', Validators.compose([Validators.required])],
      eventDate: ['', Validators.compose([Validators.required])],
      eventDateTo: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidEnter() {

    this.auth.getUserData().on('value', snapshot => {
      this.classNo = snapshot.val().classNo;
      this.school = snapshot.val().school;
    });

    this.subjectsProvider.getSubjects(this.school)
      .on('value', snapshot => {
        this.subjects = [];
        snapshot.forEach(snap => {
          console.log(snap.val(), snap.key);
          this.subjects.push(
            snap.val()
          );
          return false
        });
      });
  }

  createEvent() {

    this.eventsProvider.createEvent(
      this.createEventForm.value.eventName,
      this.school,
      this.classNo,
      this.createEventForm.value.eventDate,
      this.createEventForm.value.eventDateTo).then(() => {
      this.createdSuccessful();
    }).catch(
      err=>this.createdFailed()
    );
  }

  private createdSuccessful() {
    let alert = this.alertCtrl.create({
      message: "Klassenarbeit erstellt",
      buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
      ]
    });
    alert.present();
    this.navCtrl.pop();
  }

  private createdFailed() {
    let alert = this.alertCtrl.create({
      message: "Klassenarbeit konnte nicht erstellt werden",
      buttons: [
        {
          text: "Ok",
          role: 'cancel'
        }
      ]
    });
    alert.present();

  }
}
