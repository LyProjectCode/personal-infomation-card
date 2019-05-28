import { ValidateHelper } from './validate-helper';

// 车牌号类型
export enum PlateNumberState {
  invaild, // 无效车牌
  yellowOrBlue, // 需要用户选择黄蓝牌
  small_energy, // 小型新能源
  big_energy, // 大型新能源
  special, // 特殊车牌
  other // 其他
}

export const EnergyType = {
  firstD: 'D',
  firstF: 'F',
  lastD: 'D',
  lastF: 'F'
};

export class LicensePlateHelper {

  public static PlateHelperType(plateNumber: string): number {
    if (!ValidateHelper.PlateNumber(plateNumber)) {
      return PlateNumberState.invaild;
    }
    const verifyPlateNumber = plateNumber.slice(2); // 去掉第一位的汉字和第二位的字母
    const regex = /^{领使学警港澳]}{1}$/;
    if (regex.test(verifyPlateNumber)) {// 判断是否为特殊车牌
      return PlateNumberState.special;
    } else if (verifyPlateNumber.length === 5) { // 非特殊车牌，长度为5位的需要用户选择黄蓝号牌
      return PlateNumberState.yellowOrBlue;
    } else if (verifyPlateNumber.length === 6) { // 判断是否为小型新能源车或者大型新能源车
      const firstNumber = verifyPlateNumber.slice(0, 1);
      const lastNumber = verifyPlateNumber.slice(-1);
      if (firstNumber === EnergyType.firstD || firstNumber === EnergyType.firstF) {
        return PlateNumberState.small_energy;
      } else if (lastNumber === EnergyType.lastD || lastNumber === EnergyType.lastF) {
        return PlateNumberState.big_energy;
      }
    }
    return PlateNumberState.other;
  }
}
