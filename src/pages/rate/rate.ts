import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';
import {EventsProvider} from '../../providers/event/event';

@IonicPage({
  name: 'rate',
  segment: 'rate/:eventId'
})
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class RatePage  {
  private eventId: string ='';
  private eventName: string = '';
  private eventDate: string = '';
  private criteria: Array<any>;
  private rates: Array<number>;




  constructor(private navParams: NavParams, private user: User, private eventsProvider: EventsProvider) {
    this.eventId = this.navParams.get("eventId");
    this.eventDate = this.navParams.get("eventDate");
    this.eventName = this.navParams.get("eventName");

  }

  ionViewDidEnter() {
    this.rates = [];

    this.eventsProvider.getCriteria().on('value', snapshot => {
      this.criteria = [];
      snapshot.forEach( snap => {
        this.criteria.push({
          id: snap.key,
          criterion: snap.val().criterion,
          description: snap.val().description
        });
        this.rates.push(0);
        return false
      });
    });

    this.eventsProvider.getRates(this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId).on('value', snapshot => {
        let i:number=0;
      snapshot.forEach( snap => {
        this.rates.splice(i,1,
          snap.val()
        );
        i++;
        return false
      });
    });

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  saveRates() {
    this.eventsProvider.saveRates(
      this.user.data.get('school'),
      this.user.data.get('classNo'),
      this.user.id, this.eventId,
      this.rates);

  }


}
