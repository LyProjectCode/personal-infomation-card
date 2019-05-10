import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DateHelper } from '../../utils/date-helper';

@Component({
  selector: 'app-exercise-rxjs',
  templateUrl: './exercise-rxjs.component.html',
  styleUrls: ['./exercise-rxjs.component.css']
})
export class ExerciseRxjsComponent implements OnInit {
  public currentDate = DateHelper.currentDateTime();
  public temp1 = '00';
  public temp2 = '00';
  public temp3 = '00';
  public temp4 = '00';
  public stopwatchStatus = 0; // 0 未开始(显示开始) 1 进行中(显示暂停) 2 暂停(显示继续) 3 停止(禁用并显示开始)
  public statusNames = ['开始', '暂停', '继续', '开始'];

  private secondsCounter$ = interval(10);
  private secondsInterval$: Subscription;
  private clickCount = 0; // 记录开始按钮点击次数
  private startTimes = 0;
  private lastTimes = 0;

  constructor() {}

  ngOnInit() {
    this.changeTime();
  }

  private changeTime() {
    const timeCounter$ = interval(1000);
    timeCounter$.subscribe(
      () => (this.currentDate = DateHelper.currentDateTime())
    );
  }

  public onStart() {
    this.stopwatchStatus = this.clickCount % 2 == 0 ? 1 : 2;
    this.clickCount++;
    const date = new Date();
    // 点击开始||继续
    if (this.stopwatchStatus == 1) {
      this.startTimes = date.getTime();
      this.secondsInterval$ = this.secondsCounter$.subscribe(() =>
        this.timeIncrement()
      );
    } else {
      // 点击 暂停
      this.stopInterval();
    }
  }
  /** 点击 停止 */
  public onStop() {
    this.stopwatchStatus = 3;
    this.stopInterval();
  }
  /** 暂停定时器 */
  private stopInterval() {
    const date = new Date();
    this.lastTimes += date.getTime() - this.startTimes;
    this.secondsInterval$.unsubscribe();
  }
  /** 点击 复位 */
  public onReset() {
    this.temp1 = '00';
    this.temp2 = '00';
    this.temp3 = '00';
    this.temp4 = '00';
    this.clickCount = 0;
    this.stopwatchStatus = 0;
    this.startTimes = 0;
    this.lastTimes = 0;
  }

  private timeIncrement() {
    const date = new Date();
    const nowTimes = date.getTime() - this.startTimes + this.lastTimes;
    const ms = (nowTimes % 1000) / 10;
    const mm = (nowTimes % 60000) / 1000;
    const dd = (nowTimes % 3600000) / 60000;
    const hh = nowTimes / 3600000;
    this.temp4 = ms < 10 ? '0' + Math.floor(ms) : String(Math.floor(ms));
    this.temp3 = mm < 10 ? '0' + Math.floor(mm) : String(Math.floor(mm));
    this.temp2 = dd < 10 ? '0' + Math.floor(dd) : String(Math.floor(dd));
    this.temp1 = hh < 10 ? '0' + Math.floor(hh) : String(Math.floor(hh));
  }
}
