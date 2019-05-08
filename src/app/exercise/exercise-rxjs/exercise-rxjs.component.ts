import { Component, OnInit } from "@angular/core";
import { Observable, interval, Subscription } from "rxjs";
import { DateHelper } from "../../utils/date-helper";
import { take } from "rxjs/operators";

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
  temp4 = '00';
  secondsCounter = interval(10);
  secondsInterval: Subscription;
  stopwatchStatus = 0; //0 未开始(显示开始) 1 进行中(显示暂停) 2 暂停(显示继续) 3 停止(禁用并显示开始)
  statusList = [0, 1, 2, 3];
  statusNames = ["开始", "暂停", "继续", "开始"];
  clickCount = 0; //记录开始按钮点击次数

  start_times = 0;
  last_times = 0;

  constructor() { }

  ngOnInit() {
    this.changeTime();
  }

  private changeTime() {
    const timeCounter$ = interval(1000);
    timeCounter$.subscribe(
      () => (this.currentDate = DateHelper.currentDateTime())
    );
  }

  private onStart() {
    this.stopwatchStatus = this.clickCount % 2 == 0 ? 1 : 2;
    this.clickCount++;
    let date = new Date();
    //点击开始||继续
    if (this.stopwatchStatus == 1) {
      this.start_times = date.getTime();
      this.secondsInterval = this.secondsCounter.subscribe(() =>
        this.timeIncrement()
      );
    } else {
      //点击 暂停
      this.stopInterval();
    }
  }
  /** 点击 停止 */
  private onStop() {
    this.stopwatchStatus = 3;
    this.stopInterval();
  }
  /** 暂停定时器 */
  private stopInterval() {
    let date = new Date();
    this.last_times += date.getTime() - this.start_times;
    this.secondsInterval.unsubscribe();
  }
  /** 点击 复位 */
  private onReset() {
    this.temp1 = '00';
    this.temp2 = '00';
    this.temp3 = '00';
    this.temp4 = '00';
    this.clickCount = 0;
    this.stopwatchStatus = 0;
    this.start_times = 0;
    this.last_times = 0;
  }

  timeIncrement() {
    let date = new Date();
    let now_times = date.getTime() - this.start_times + this.last_times;
    var ms = (now_times % 1000) / 10;
    var mm = (now_times % 60000) / 1000;
    var dd = (now_times % 3600000) / 60000;
    var hh = now_times / 3600000;
    this.temp4 = ms < 10 ? '0' + Math.floor(ms) : String(Math.floor(ms));
    this.temp3 = mm < 10 ? '0' + Math.floor(mm) : String(Math.floor(mm));
    this.temp2 = dd < 10 ? '0' + Math.floor(dd) : String(Math.floor(dd));
    this.temp1 = hh < 10 ? '0' + Math.floor(hh) : String(Math.floor(hh));
  }
}
