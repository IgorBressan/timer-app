import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalTimerPage } from './normal-timer';

@NgModule({
  declarations: [
    NormalTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(NormalTimerPage),
  ],
})
export class NormalTimerPageModule {}
