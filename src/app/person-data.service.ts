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

  constructor() { }
  // 初始化错误信息
  private initErrMsg() {
    this.nameErrMsg = '';
    this.ageErrMsg = '';
    this.phoneErrMsg = '';
    this.addressErrMsg = '';
    this.paramsChecked = false;
  };

  public checkParamsValid(personParams: any): boolean {
    this.initErrMsg();
    let isInputRight = true;
    if (personParams.name) {
      if (!ValidateHelper.Length(personParams.name, 2, 20)) {
        this.nameErrMsg = '姓名最少2个字符，最多20个字符！';
        isInputRight = false;
      }
    }
    if (personParams.age) {
      if (!ValidateHelper.Age(personParams.age)) {
        this.ageErrMsg = '年龄输入错误，请重新输入！';
        isInputRight = false;
      }
    }
    if (personParams.phone) {
      if (!ValidateHelper.Phone(personParams.phone)) {
        this.phoneErrMsg = '电话号码格式错误，请重新输入！';
        isInputRight = false;
      }
    }
    if (personParams.address) {
      if (!ValidateHelper.Length(personParams.address, 6, 50)) {
        this.addressErrMsg = '住址信息最少6个字符，最多50个字符！！';
        isInputRight = false;
      }
    }
    if (!this.nameErrMsg && !this.ageErrMsg && !this.phoneErrMsg && !this.addressErrMsg) {
      this.paramsChecked = true;
    }
    return isInputRight;
  }

  public getPersonModel(): any {
    let personInfo = window.localStorage.getItem('personInfo');
    if (personInfo) {
      return JSON.parse(personInfo);
    }
    return Person[0];
  }
}
