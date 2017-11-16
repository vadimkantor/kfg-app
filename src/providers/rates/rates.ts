import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class RatesProvider {

   getCriteria(school: string): firebase.database.Reference {
    return firebase.database().ref('/schools/' + school + '/criteria');
  }

   getUserRates(school: string, classNo: string, userId: string, eventId: string): firebase.database.Reference {
    let ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + userId + '/' + eventId;
    return firebase.database().ref(ratesPath);
  }

   getCurrentRates(school: string, classNo: string, eventId: string): firebase.database.Reference {
    let ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + 'current' + '/' + eventId;
    return firebase.database().ref(ratesPath);
  }

   saveUserRates(school: string, classNo: string, userId: string, eventId: string, rates: Array<any>): firebase.Promise<any> {
    let ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + userId + '/' + eventId;
    return new Promise((resolve) => {
      rates.forEach(r => {
        let id: string = r.critId;
        firebase.database().ref(ratesPath).child(id).set({
          "subject": r.subject,
          "criterion": r.criterion,
          "rate": r.rate
        });
      });
      return resolve();
    });
  }

   saveCurrentRates(school: string, classNo: string, eventId: string, rates: Array<any>, teacherCode: string): firebase.Promise<any> {
    let ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + 'current' + '/' + eventId;
    return new Promise((resolve) => {

      rates.forEach(r => {
        let id: string = r.critId;
        firebase.database().ref(ratesPath).child(id).set({
          "subject": r.subject,
          "criterion": r.criterion,
          "rate": r.rate,
          "count": r.count,
          "teacherCode:" : teacherCode
        });
      });
      return resolve();
    });

  }


}

