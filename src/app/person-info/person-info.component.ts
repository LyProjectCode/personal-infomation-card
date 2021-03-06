import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css', '../app.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input() person: Person;

  constructor(private personDataService: PersonDataService) {}

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): void {
    const personInfo = this.personDataService.getPersonModel();
    if (personInfo) {
      this.person = personInfo;
    }
  }
}
