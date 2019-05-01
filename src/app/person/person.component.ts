import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css', '../app.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor(
    private personDataService: PersonDataService) { }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): void {
    let personInfo = this.personDataService.getPersonModel();
    if (personInfo) {
      this.person = personInfo;
    }
  }
}
