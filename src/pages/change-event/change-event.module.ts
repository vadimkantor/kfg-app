import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeEventPage } from './change-event';

@NgModule({
  declarations: [
    ChangeEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeEventPage),
  ],
})
export class ChangeEventPageModule {}
