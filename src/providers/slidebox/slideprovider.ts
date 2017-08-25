import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class SlideboxProvider {

  getSlidebox(school: string):  firebase.database.Reference {
    return firebase.database().ref('/schools/' + school + '/slidebox');
  }

}
