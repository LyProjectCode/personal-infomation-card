import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    const regex = /^\d{1,3}(\.\d{1,2})?$/;
    if (regex.test(value)) {
      const intUnit = new Array('佰', '拾', '');
      const decUnit = new Array('角', '分');
      const baseValue = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
      const intLast = '元';
      const integerLast = '整';
      let chineseStr = ' ';
      if (String(value) == '0') {
        chineseStr = baseValue[0] + intLast + integerLast;
      } else {
        let source = String(value).split('.');
        let intNum = source[0];//整数部分
        let decNum = source[1];//小数部分
        let intLen = intNum.length;
        let decLen = decNum ? decNum.length : 0;

        if (intLen > 0 && Number(intNum) != 0) {
          let zeroCount = 0;
          for (let i = 0; i < intLen; i++) {
            let num = intNum.charAt(i);
            if (num == '0') {
              zeroCount++;
            } else {
              if (zeroCount > 0) {
                chineseStr += baseValue[0];
              }
              zeroCount = 0;
              let index = 3 - (intLen - i)
              chineseStr = chineseStr + baseValue[Number(num)] + intUnit[index];
            }
          }
          chineseStr += intLast;
        }
        if (decLen > 0 && Number(decNum) != 0) {
          for (let j = 0; j < decLen; j++) {
            let num = decNum.charAt(j);
            if(num=='0'){
              continue;
            }
            chineseStr = chineseStr + baseValue[Number(num)] + decUnit[j];
          }
        } else {
          chineseStr += integerLast;
        }
      }
      return chineseStr;
    }
    return '';
  }
}
