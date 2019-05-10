import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    // const regex = /^\d{1,3}(\.\d{1,2})?$/;
    // 以数字开头和结尾，且小数点只能出现一次，做多三位整数或两位小数
    const regex = /^(0|[1-9]\d{0,2})(\.\d{1,2})?$/;
    if (regex.test(value)) {
      const intUnit = new Array('佰', '拾', '');
      const decUnit = new Array('角', '分');
      const baseValue = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
      const intLast = '元';
      const integerLast = '整';
      let chineseStr = ' ';
      if (String(value) === '0') {
        chineseStr = baseValue[0] + intLast + integerLast;
      } else {
        const source = String(value).split('.');
        const intNum = source[0]; // 整数部分
        const decNum = source[1]; // 小数部分
        const intLen = intNum.length;
        const decLen = decNum ? decNum.length : 0;

        if (intLen > 0 && Number(intNum) !== 0) {
          let zeroCount = 0;
          for (let i = 0; i < intLen; i++) {
            const num = intNum.charAt(i);
            if (num === '0') {
              zeroCount++;
            } else {
              if (zeroCount > 0) {
                chineseStr += baseValue[0];
              }
              zeroCount = 0;
              const index = 3 - (intLen - i);
              chineseStr = chineseStr + baseValue[Number(num)] + intUnit[index];
            }
          }
          chineseStr += intLast;
        }
        if (decLen > 0 && Number(decNum) !== 0) {
          for (let j = 0; j < decLen; j++) {
            const num = decNum.charAt(j);
            if (num === '0') {
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
