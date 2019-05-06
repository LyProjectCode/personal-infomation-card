import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    const regex = /^\d{1,3}(\.\d{1,2})?$/;
    if (regex.test(value)) {
      const intUnit = new Array('佰', '拾', '元');
      const pointUnit = new Array('角', '分');
      const baseValue = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
      let source = String(value).split('.');
      let intValue = source[0];//整数部分
      let pointValue = source[1];//小数部分
      let intLen = intValue.length;
      let pointLen = pointValue ? pointValue.length : 0;
      let transformMoney = ' ';
      if (intLen > 0 && Number(intValue) != 0) {
        for (let i = 0; i < intLen; i++) {
          let num = intValue.charAt(i);
          let index = 3 - (intLen - i)
          transformMoney = transformMoney + baseValue[Number(num)] + intUnit[index];
        }
      }
      if (pointLen > 0 && Number(pointValue) != 0) {
        for (let j = 0; j < pointLen; j++) {
          let num = pointValue.charAt(j);
          transformMoney = transformMoney + baseValue[Number(num)] + pointUnit[j];
        }
      } else {
        if (Number(intValue) == 0) {
          transformMoney += baseValue[0] + '元';
        }
        transformMoney += '整';
      }
      return transformMoney;
    }
    return '';
  }
}
