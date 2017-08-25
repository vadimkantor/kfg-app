import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class SubjectsProvider {

   getSubjects(school: string):  firebase.database.Reference {
    console.log('/schools/' + school + '/subjects');
    return firebase.database().ref('/schools/' + school + '/subjects');
  }

}
