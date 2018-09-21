import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerPage } from './timer';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    TimerPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerPage),
    RoundProgressModule
  ],
})
export class TimerPageModule {}
