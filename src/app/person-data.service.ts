import { Injectable } from '@angular/core';
import { ValidateHelper } from './utils/validate-helper';
import { Person } from './person';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  public nameErrMsg: string;
  public ageErrMsg: string;
  public phoneErrMsg: string;
  public addressErrMsg: string;
  public paramsChecked: boolean;
  public person: any;

  constructor() { 
    this.PersonModel();
  }

  private PersonModel(){
    let personInfo = window.localStorage.getItem('personInfo');
    if (personInfo) {
      this.person = JSON.parse(personInfo);
    }
  }

  public getPersonModel(): any {
    let personInfo = window.localStorage.getItem('personInfo');
    if (personInfo) {
      return JSON.parse(personInfo);
    }
    return Person[0];
  }
}
