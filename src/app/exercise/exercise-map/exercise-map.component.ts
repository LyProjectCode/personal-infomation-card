import { Component, OnInit } from '@angular/core';
// import{NavController} from 'ionic-angular';

declare let AMap:any;

@Component({
  selector: 'app-exercise-map',
  templateUrl: './exercise-map.component.html',
  styleUrls: ['./exercise-map.component.css']
})
export class ExerciseMapComponent implements OnInit {
  public map:any;
  constructor() { }

  ngOnInit() {
    this.getMap ();
  }
  
  getMap(){
    let map = new AMap.Map('map-box', {
     resizeEnable: true,
     zoom:16,
     center: [116.397428, 39.90923]
   });
 }

}
