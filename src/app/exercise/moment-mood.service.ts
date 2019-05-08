import { Injectable } from '@angular/core';
import { ExerciseServiceComponent } from './exercise-service/exercise-service.component';

@Injectable({
  providedIn: ExerciseServiceComponent
})
export class MomentMoodService {
  public moodList=['兴奋','高兴','悲伤','愤怒','快乐','期待','愉悦'];

  constructor() { }

  public randomOneMood():string {
    let len = this.moodList.length;
    let momentMood = this.moodList[Math.floor(Math.random()*len)];
    return momentMood;
  }
}
