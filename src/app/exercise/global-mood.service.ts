import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {
  private moodList = ['兴奋', '高兴', '悲伤', '愤怒', '快乐', '期待', '愉悦'];
  public globalMood = '高兴';

  constructor() {}

  public chooseOneMood(): void {
    const len = this.moodList.length;
    this.globalMood = this.moodList[Math.floor(Math.random() * len)];
  }
}
