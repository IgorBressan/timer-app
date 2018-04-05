import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@IonicPage()
@Component({
  selector: 'page-observable-timer',
  templateUrl: 'observable-timer.html',
})
export class ObservableTimerPage {

  public timerVar;

  public timerVal;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.startTimer();

  }

  startTimer()
  {
    this.timerVar = Observable.interval(1000).subscribe(x => {
      this.timerVal = x;

      if (x == 3)
      {
        this.timerVar.unsubscribe();
      }
    })
  }

}
