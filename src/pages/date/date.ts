import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-date',
  templateUrl: 'date.html',
})
export class DatePage {

  private currentDate:any;
  private formattedDate:any;
  private unixTime:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.currentDate = new Date();

    this.getFormattedDate();

    this.unixTime = this.currentDate.getTime();

  }

  getFormattedDate()
  {
    let dateObj = new Date();

    let year = dateObj.getFullYear().toString();
    let month = dateObj.getMonth().toString();
    let date = dateObj.getDate().toString();

    let monthArray = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    let monthNumber = ['01','02','03','04','05','06','07','08','09','10','11','12'];

    this.formattedDate = year + '/' + monthNumber[month] + '/' + date;
  }

}
