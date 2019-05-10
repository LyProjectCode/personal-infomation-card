import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-pipe',
  templateUrl: './exercise-pipe.component.html',
  styleUrls: ['./exercise-pipe.component.css', '../../app.component.css']
})
export class ExercisePipeComponent implements OnInit {
  public transform: number;
  constructor() {}

  ngOnInit() {}
}
