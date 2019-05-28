import { Component, OnInit } from '@angular/core';
import { LicensePlateHelper } from '../../utils/license-plate-helper';

@Component({
  selector: 'app-exercise-regex',
  templateUrl: './exercise-regex.component.html',
  styleUrls: ['./exercise-regex.component.css', '../../app.component.css']
})
export class ExerciseRegexComponent implements OnInit {
  public plateNumber: string;
  public message: number;
  constructor() { }

  ngOnInit() {
  }

  onBlur() {
    this.message = LicensePlateHelper.PlateNumberType(this.plateNumber);

  }

}
