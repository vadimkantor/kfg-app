import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class EventsProvider {

  constructor() {
  }

  getEvents(school: string, classNo: string): firebase.database.Reference {
    return firebase.database().ref('/' + school + '/' + classNo);
  }


  getCriteria(): firebase.database.Reference {
    return firebase.database().ref('/criteria');
  }

  getRates(school: string, classNo: string, userId: string, eventId: string): firebase.database.Reference {
    let ratesPath = '/rates' + '/' + school + '/' + classNo + '/' + userId + '/' + eventId;
    console.log(ratesPath);
    return firebase.database().ref(ratesPath);
  }


  saveRates(school: string, classNo: string, userId: string, eventId: string, rates: Array<number>): firebase.Promise<any> {
    let ratesPath = '/rates' + '/' + school + '/' + classNo + '/' + userId + '/' + eventId;
    return firebase.database().ref(ratesPath).set(rates);
  }


}
