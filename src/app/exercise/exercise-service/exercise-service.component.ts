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

  constructor(
    private globalMoodService: GlobalMoodService,
    private momentMoodService: MomentMoodService
  ) { }

  ngOnInit() {
  }

  public onChangeGlobalMood() {
    this.globalMoodService.chooseOneMood();
  }

  private onChangeMomentMood() {
    this.momentMoodService.randomOneMood();
  }
}
