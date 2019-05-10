import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  public person: any;

  constructor() {
    this.PersonModel();
  }

  private PersonModel() {
    const personInfo = window.localStorage.getItem('personInfo');
    if (personInfo) {
      this.person = JSON.parse(personInfo);
    }
  }

  public getPersonModel(): any {
    const personInfo = window.localStorage.getItem('personInfo');
    if (personInfo) {
      this.person = JSON.parse(personInfo);
      return JSON.parse(personInfo);
    }
    return Person[0];
  }
}
