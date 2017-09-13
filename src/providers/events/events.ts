import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventsProvider {

   createEvent(name: string, school: string, classNo: string, date: string, dateTo: string): firebase.Promise<any>{
    let newEvent={
      "name":name,
      "date":date,
      "dateTo": dateTo,
      "hidden": false,
      "sortid": '-' + date
    };
    return firebase.database().ref('/schools/' + school + '/events/' + classNo).push(newEvent);
  }

   changeEvent(eventId:string, name: string,
              school: string, classNo: string,
              date: string, dateTo: string): firebase.Promise<any>{
    return new Promise((resolve) => {
      let ref = firebase.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId);
      ref.child("name").set(name);
      ref.child("date").set(date);
      ref.child("dateTo").set(dateTo);
      ref.child("sortid").set("-" + date);
      return resolve();
    });
   }

  getEvents(school: string, classNo: string): firebase.database.Query {
    return firebase.database().ref('/schools/' + school + '/events/' + classNo).orderByChild('sortid');
  }

  hideEvent(school: string, classNo: string, eventId: string) {
    let ref = firebase.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId + '/hidden');
    ref.set(true);
  }

   unhideEvent(school: string, classNo: string, eventId: string) {
    let ref = firebase.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId + '/hidden');
    ref.set(false);
  }

  deleteEvent(school: string, classNo: string, eventId: string) {
    firebase.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId).remove();
  }
}
