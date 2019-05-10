import { Injectable } from '@angular/core';

@Injectable()
export class MomentMoodService {
  private moodList = ['兴奋', '高兴', '悲伤', '愤怒', '快乐', '期待', '愉悦'];
  public momentMood = '高兴';

  constructor() {}

  public randomOneMood(): void {
    const len = this.moodList.length;
    this.momentMood = this.moodList[Math.floor(Math.random() * len)];
  }
}
