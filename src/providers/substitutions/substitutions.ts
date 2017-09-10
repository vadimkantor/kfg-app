import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class SubstitutionsProvider {

  getSchoolSubstitutions(school: string):  firebase.database.Query {
    return firebase.database().ref('/schools/' + school + '/substitutions').orderByChild('Datum');
  }
}
