import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class TeachersProvider {

  getTeachers(school: string): firebase.database.Reference {
    return firebase.database().ref('/schools/' + school + '/teachers');
  }

}
