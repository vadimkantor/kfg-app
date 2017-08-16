import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Auth, User} from '@ionic/cloud-angular';
import {LoginPage} from '../login/login';
import {RatePage} from '../rate/rate';
import {FirebaseProvider} from '../../providers/firebase/firebase';
import {FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  public classNo: string = '';
  public school: string = '';
  public events: {e: FirebaseListObservable<any>};

  constructor(private navCtrl: NavController, private user: User, private auth: Auth, private fb:FirebaseProvider) {
    console.log(user);

    this.classNo = user.data.get('classNo');
    this.school = user.data.get('school');
  }

  public ngOnInit() {
    this.fb.getEvents(this.school,this.classNo ).then((data: {e: FirebaseListObservable<any>})=>this.events=data);
  }

  public onSearchInput( event:string)  {
    console.log(event);
  };

  public showEvent(event: any){
    this.navCtrl.push(RatePage,{'eventId':event.id, 'eventName':event.name, 'eventDate':event.date})
  }


  public logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
