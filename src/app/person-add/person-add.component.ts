import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';
import { PersonHttpService } from '../person-http.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css', '../app.component.css']
})

export class PersonAddComponent implements OnInit {

  private person = new Person(null, '', '男', null, '', '');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personDataService: PersonDataService,
    private personHttpService: PersonHttpService) { }

  ngOnInit() {
    this.checkStatus();
  }

  // 保存个人信息
  public onPersonFormSubmit(person: Person): void {
    if (!person) {
      alert('请完善个人信息');
      return;
    }
    this.personHttpService.addPersonModel(person);
    this.router.navigate(['/person'], { relativeTo: this.route });
  }
  // 判断个人信息是否已经保存
  private checkStatus(): void {
    let personInfo = this.personDataService.getPersonModel();
    if (personInfo) {
      this.router.navigate(['/person'], { relativeTo: this.route });
    }
  }
}
