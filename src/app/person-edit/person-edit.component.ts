import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonDataService } from '../person-data.service';
import { PersonHttpService } from '../person-http.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css', '../app.component.css']
})
export class PersonEditComponent implements OnInit {
  @Input() person: Person;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personDataService: PersonDataService,
    private personHttpService: PersonHttpService) { }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): void {
    let personInfo = this.personDataService.getPersonModel();
    if (personInfo) {
      this.person = personInfo;
    }
  }

  // 更新个人信息
  public onPersonFormSubmit(person: Person): void {
    if (!person) {
      alert('请完善个人信息');
      return;
    }
    this.personHttpService.addPersonModel(person);
    this.router.navigate(['/person'], { relativeTo: this.route });
  }
  // 取消编辑，如果数据发生变化进行提示
  public cancel(dirtyStatus: boolean): void {
    if (dirtyStatus) {
      let ifEsc = confirm('有数据发生修改，是否放弃更改？');
      if (!ifEsc) {
        return;
      }
    }
    this.router.navigate(['/person'], { relativeTo: this.route });
  }
}
