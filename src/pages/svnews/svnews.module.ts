import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SvnewsPage } from './svnews';

@NgModule({
  declarations: [
    SvnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(SvnewsPage),
  ],
})
export class SvnewsPageModule {}
