import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-pipe',
  templateUrl: './exercise-pipe.component.html',
  styleUrls: ['./exercise-pipe.component.css', '../../app.component.css']
})
export class ExercisePipeComponent implements OnInit {
  private transform:number;
  constructor() { }

  ngOnInit() {
  }

}
