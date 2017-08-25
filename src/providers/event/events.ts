import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventsProvider {

  getEvents(school: string, classNo: string): firebase.database.Reference {
    return firebase.database().ref('/' + school + '/' + classNo);
  }

}
