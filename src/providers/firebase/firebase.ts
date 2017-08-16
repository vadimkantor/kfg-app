import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor( private db: AngularFireDatabase) {
  }

  public getEvents(school:string, classNo: string){
    let eventPath = '/' + school + '/' + classNo;
    console.log("eventPath:" + eventPath);
      return new Promise(resolve=> {
        this.db.list(eventPath).subscribe(data => {
          resolve(data)
        });
      });
  }

  public getCriteria(){
    let criteriaPath = '/criteria';
    return new Promise(resolve=> {
      this.db.list(criteriaPath).subscribe(data => {
        resolve(data);
      });
    });
  }

  public saveRates(school:string, classNo:string, userId:string, eventId:number, rates:any){
    let ratesPath='/rates' + '/' + school + '/' + classNo + '/' + userId + '/' + eventId;
    this.db.object(ratesPath).set(rates).then(_=>console.log("saved"));
  }

  public getRates(school:string, classNo:string, userId:string, eventId:number){
    let ratesPath='/rates' + '/' + school + '/' + classNo + '/' + userId + '/' + eventId;
    return new Promise(resolve=> {
      this.db.list(ratesPath).subscribe(data => {
        resolve(data);
      });
    });
  }
}
