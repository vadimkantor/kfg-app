import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class SlideboxProvider {

  getSchoolSlidebox(school: string):  firebase.database.Reference {
    return firebase.database().ref('/schools/' + school + '/slidebox');
  }

  getSlidebox():  firebase.database.Reference {
    return firebase.database().ref('/slidebox');
  }

}
