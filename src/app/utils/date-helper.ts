export class DateHelper {
  public static currentDateTime(): string {
    let timeStr = '';
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours() + '';
    if (Number(hour) < 10) {
      hour = '0' + hour;
    }
    let minute = date.getMinutes() + '';
    if (Number(minute) < 10) {
      minute = '0' + minute;
    }
    let second = date.getSeconds() + '';
    if (Number(second) < 10) {
      second = '0' + second;
    }
    timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
    return timeStr;
  }
}
