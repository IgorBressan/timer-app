import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservableTimerPage } from './observable-timer';

@NgModule({
  declarations: [
    ObservableTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservableTimerPage),
  ],
})
export class ObservableTimerPageModule {}
