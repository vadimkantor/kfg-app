import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Auth, User} from '@ionic/cloud-angular';
import {LoginPage} from '../login/login';
import {RatePage} from '../rate/rate';
import {EventsProvider} from '../../providers/event/event';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  public classNo: string = '';
  public school: string = '';

  public eventList: Array<any>;

  constructor(private navCtrl: NavController, private user: User, private auth: Auth, private eventsProvider:EventsProvider) {
    console.log(user);

    this.classNo = user.data.get('classNo');
    this.school = user.data.get('school');
  }

  ionViewDidEnter() {
    this.eventsProvider.getEvents(this.school,this.classNo).on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          date: snap.val().date
        });
        return false
      });
    });
  }

  goToRate(event){
    this.navCtrl.push(RatePage, { 'eventId': event.id, 'eventDate': event.date, 'eventName': event.name });
  }


  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
