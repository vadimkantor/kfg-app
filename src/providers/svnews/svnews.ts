import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class SvnewsProvider {

  getSchoolNews(school: string):  firebase.database.Query {
    return firebase.database().ref('/schools/' + school + '/svnews').orderByChild('date');;
  }


}
