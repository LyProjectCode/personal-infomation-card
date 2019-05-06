import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../../person-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private personDataService: PersonDataService) { }

  ngOnInit() {
  }

}
