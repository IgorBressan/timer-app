import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-normal-timer',
  templateUrl: 'normal-timer.html',
})
export class NormalTimerPage {

  public timer = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startTimer();
  }

  startTimer()
  {
    let intervalVar = setInterval(() => {
      this.timer++;
    }, 1000);
  }

}
