import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  private hora:number = 0;
  private minuto:number = 0;
  private segundo:number = 0;

  private cronoHora:number = 0;
  private cronoMinuto:number = 0;
  private cronoSegundo:number = 0;

  private prepare:boolean = false;
  private start:boolean = false;
  private pause:boolean = true;

  private interval:any;

  private progressive:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  timerUp(data, type = true)
  {
    if(type)
    {
      if (data == 'hora' && this.hora < 24)
      {
        this.hora++;
      }

      if (data == 'minuto' && this.minuto <= 59)
      {
        this.minuto++;
      }

      if (data == 'minuto' && this.hora < 24 && this.minuto == 60)
      {
        this.timerUp('hora')
        this.minuto = 0;
      }

      if (data == 'segundo' && this.segundo <= 59)
      {
        this.segundo++;
      }
      
      if (data == 'segundo' && this.minuto < 59 && this.hora < 24 && this.segundo == 60)
      {
        this.timerUp('minuto')
        this.segundo = 0;
      }
    } else {

      if (data == 'hora' && this.cronoHora < 24)
      {
        this.cronoHora++;
      }

      if (data == 'minuto' && this.cronoMinuto <= 59)
      {
        this.cronoMinuto++;
      }

      if (data == 'minuto' && this.cronoHora < 24 && this.cronoMinuto == 60)
      {
        this.timerUp('hora',false)
        this.cronoMinuto = 0;
      }

      if (data == 'segundo' && this.cronoSegundo <= 59)
      {
        this.cronoSegundo++;
      }
      
      if (data == 'segundo' && this.cronoMinuto < 59 && this.hora < 24 && this.cronoSegundo == 60)
      {
        this.timerUp('minuto',false)
        this.cronoSegundo = 0;
      }

      if (this.cronoHora == this.hora &&  this.cronoMinuto == this.minuto  && this.cronoSegundo == this.segundo ) return true;

    }
    
  }

  timerDown(data, type = true)
  {

    if (type)
    {

      if (data == 'hora' && this.hora > 0)
      {
        this.hora--;
      }

      if (data == 'minuto' && this.minuto > 0)
      {
        this.minuto--;
      }

      if (data == 'minuto' && this.hora > 0 && this.minuto == 0) 
      {
        this.timerDown('hora')
        this.minuto = 59;
      }

      if (data == 'segundo' && this.segundo > 0)
      {
        this.segundo--;
      }

      if (data == 'segundo' && this.minuto > 0 && this.segundo == 0)
      {
        this.timerDown('minuto')
        this.segundo = 59;
      }

    } else {

      if (data == 'hora' && this.cronoHora > 0)
      {
        this.cronoHora--;
      }

      if (data == 'minuto' && this.cronoMinuto > 0)
      {
        this.cronoMinuto--;
      }

      if (data == 'minuto' && this.cronoHora > 0 && this.cronoMinuto == 0) 
      {
        this.timerDown('hora', false)
        this.cronoMinuto = 59;
      }

      if (data == 'segundo' && this.cronoSegundo > 0)
      {
        this.cronoSegundo--;
      }

      if (data == 'segundo' && this.cronoMinuto > 0 && this.cronoSegundo == 0)
      {
        this.timerDown('minuto', false)
        this.cronoSegundo = 59;
      }

      if (this.cronoHora == 0 &&  this.cronoMinuto == 0  && this.cronoSegundo == 0 ) return true;

    }
    
    

    
  }

  defineTimer(type)
  {
    if (type == 'progressivo')
    {
      this.cronoHora = 0;
      this.cronoMinuto = 0;
      this.cronoSegundo = 0;
      this.prepare = true;
      this.progressive = true;
    }
    if (type == 'regressivo')
    {
      this.cronoHora = this.hora;
      this.cronoMinuto = this.minuto;
      this.cronoSegundo = this.segundo;
      this.prepare = true;
      this.progressive = false;
    }
  }

  startTimer()
  {

    this.pause = false;

    if (this.progressive)
    {
      this.interval = setInterval(() => {
        if (this.timerUp('segundo', false)) this.stopTimer();
      }, 1000);
    } else {
      this.interval = setInterval(() => {
        if (this.timerDown('segundo', false)) this.stopTimer();
      }, 1000);
    }

  }

  stopTimer()
  {
    clearTimeout(this.interval);
    this.pause = true;
    this.prepare = false;
  }

  pauseTimer()
  {
    this.pause = true;
    clearTimeout(this.interval);
  }

  resetTimer()
  {
    this.pause = true;

    if (this.progressive)
    {
      this.defineTimer('progressivo');
    } else
    {
      this.defineTimer('regressivo');
    }

  }
  

}
