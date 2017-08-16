import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';
import {FirebaseProvider} from '../../providers/firebase/firebase';
import {FirebaseListObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class RatePage implements OnInit {
  private eventId: number;
  private eventName: string = '';
  private eventDate: string = '';
  private criteria: { c: FirebaseListObservable<any> };
  private myRates: { r: FirebaseListObservable<number> };

  private rates: number[] = new Array();

  constructor(private navParams: NavParams, private user: User, private fb: FirebaseProvider) {
    this.eventId = this.navParams.get("eventId");
    this.eventDate = this.navParams.get("eventDate");
    this.eventName = this.navParams.get("eventName");
  }


  public ngOnInit() {
    this.fb.getCriteria().then((data: { c: FirebaseListObservable<any> }) => this.criteria = data);
    this.fb.getRates(
      this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId
    ).then((data: { r: FirebaseListObservable<any> }) => this.myRates = data);


  }

  public saveRates() {

    let json: string = //JSON.stringify(this.myRates);
    "[1,2,4]";


    console.log(json);
    this.fb.saveRates(
      this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId,
      JSON.parse(json));

  }


}
