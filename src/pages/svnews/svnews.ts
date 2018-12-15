import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SvnewsProvider} from "../../providers/svnews/svnews";

/**
 * Generated class for the SvnewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-svnews',
  templateUrl: 'svnews.html',
})
export class SvnewsPage {
  private news: Array<any> = [];
  private school:string ='';
  constructor(private newsProvider: SvnewsProvider) {
  }

  ionViewDidLoad() {
    this.newsProvider.getSchoolNews(this.school)
      .on('value', snapshot => {
        this.news = [];
        snapshot.forEach(snap => {
          this.news.push(
            snap.val()
          );
          return false
        });
      });
  }

}
