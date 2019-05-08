import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { DateHelper } from '../../utils/date-helper';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-rxjs',
  templateUrl: './exercise-rxjs.component.html',
  styleUrls: ['./exercise-rxjs.component.css']
})

export class ExerciseRxjsComponent implements OnInit {
  private currentDate = DateHelper.currentDateTime();
  temp1 = '00';
  temp2 = '00';
  temp3 = '00';
  temp4 = '00';//10毫秒+1,最多到99
  secondsCounter = interval(10);
  stopwatchStatus = 0;//0 未开始(显示开始) 1 进行中(显示暂停) 2 暂停(显示继续) 3 停止(禁用并显示开始)
  statusList = [0, 1, 2, 3];
  statusNams = ['开始', '暂停', '继续', '开始'];
  clickCount = 0;//记录开始按钮点击次数

  time = 0;
  pre_time = 0;
  intervals = 0;
  pre_intervals = 0;
  flag = null;

  constructor() { }

  ngOnInit() {
    this.changeTime();
  }

  private changeTime() {
    const timeCounter$ = interval(1000);
    timeCounter$.subscribe(() =>
      this.currentDate = DateHelper.currentDateTime()
    );
  }

  private onStart() {
    this.stopwatchStatus = this.clickCount % 2 == 0 ? 1 : 2;
    this.clickCount++;
    let date = new Date();
    if (this.stopwatchStatus == 1) {
      this.time = date.getTime();
      this.pre_time = this.time;
      const temp3Counter$ = interval(10);
      this.secondsCounter.subscribe(() =>
        this.timeIncrement()
      )
    } else {
      this.onStop();

    }
  }

  private onStop() {
    this.clickCount = 0;
    this.stopwatchStatus = 3;
    let date = new Date();
    this.pre_intervals += date.getTime() - this.pre_time;
    // unsubscribe();
  }

  private onReset() {
    this.temp1 = '00';
    this.temp2 = '00';
    this.temp3 = '00';
    this.temp4 = '00';
    this.clickCount = 0;
    this.stopwatchStatus = 0;
  }

  timeIncrement() {
    let date = new Date();
    this.intervals = date.getTime() - this.time + this.pre_intervals;
    var a = this.intervals % 1000 / 10;
    var b = this.intervals % 60000 / 1000;
    var c = this.intervals % 3600000 / 60000;
    var d = this.intervals / 3600000;
    this.temp4 = (a < 10) ? ('0' + Math.floor(a)) : String(Math.floor(a));
    this.temp3 = (b < 10) ? ('0' + Math.floor(b)) : String(Math.floor(b));
    this.temp2 = (c < 10) ? ('0' + Math.floor(c)) : String(Math.floor(c));
    this.temp1 = (d < 10) ? ('0' + Math.floor(d)) : String(Math.floor(d));
  }
}
