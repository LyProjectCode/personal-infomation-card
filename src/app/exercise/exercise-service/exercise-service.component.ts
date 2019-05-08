import { Component, OnInit } from '@angular/core';
import { GlobalMoodService } from '../global-mood.service';
import { MomentMoodService } from '../moment-mood.service';

@Component({
  selector: 'app-exercise-service',
  templateUrl: './exercise-service.component.html',
  styleUrls: ['./exercise-service.component.css', '../../app.component.css'],
  providers: [MomentMoodService]
})
export class ExerciseServiceComponent implements OnInit {
  private momentMood: string;
  constructor(
    private globalMoodService: GlobalMoodService,
    private momentMoodService: MomentMoodService
  ) { }

  ngOnInit() {
    this.getGlobalMood();
    this.onChangeMomentMood();
  }

  public getGlobalMood() {
    this.globalMoodService.chooseOneMood();
  }

  private onChangeMomentMood() {
    this.momentMood = this.momentMoodService.randomOneMood();
  }
}
