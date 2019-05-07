import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {
  public moodList= ['兴奋', '高兴', '悲伤', '愤怒', '快乐', '期待', '愉悦'];
  public globalMood: string;
  private chooseCount = 0;

  constructor() { }

  public chooseOneMood(): void {
    if(this.chooseCount==0){
      let len = this.moodList.length;
      this.globalMood = this.moodList[Math.floor(Math.random() * len)];
      this.chooseCount++;
    }
  }
}
