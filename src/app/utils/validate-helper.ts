/**
 * Created by zack on 8/2/18.
 */
export class ValidateHelper {
  /** 校验是否为有效电话号码 */
  public static Phone(phone: string): boolean {
    if (phone === '' || phone == null) {
      return true;
    }
    const regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(1[3-9])\d{9}$)/g;
    return regex.test(phone);
  }

  /** 校验是否为有效手机号码 */
  public static Telephone(telephone: string): boolean {
    if (telephone === '' || telephone === null) {
      return true;
    }
    const regex = /^(1[3-9])\d{9}$/g;
    return regex.test(telephone);
  }

  /** 校验非特殊字符 */
  public static NonSpecialCharacter(target: string): boolean {
    const regex = /^[a-zA-Z0-9\u4e00-\u9fa5]$/;
    return regex.test(target);
  }

  /**
   * 校验字符串长度是否符合要求
   * @param target 目标字符串
   * @param min 最短
   * @param max 最长
   */
  public static Length(target: string, min: number, max: number): boolean {
    return target == null || (target.length >= min && target.length <= max);
  }

  /**
   * 校验非中文的字符串
   * @param param 目标字符串
   */
  public static NotChinese(param: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(param);
  }

  /**
   * 校验年龄
   * @param age 年龄
   */
  public static Age(age: string): boolean {
    const regex = /^(?:[1-9][0-9]?|1[04][0-9]|150)$/;
    return regex.test(age);
  }

  /**
   * 校验是否为有效车牌号
   * @param plate_number 目标车牌号
   * @returns {boolean}
   */
  public static PlateNumber(plate_number: string): boolean {
    if (plate_number === '' || plate_number == null) {
      return true;
    }
    const rule1 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{5})[A-HJ-NP-Z\d]{5}$/;
    const rule2 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}学$/;
    const rule3 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}警$/;
    const rule4 = /^[A-Z]{2}(?![A-HJ-NP-Z]{5})[A-HJ-NP-Z\d]{5}$/;
    const rule5 = /^WJ[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}\d{4}[A-H_J-NP-Z\d]$/;
    const rule6 = /^粤[A-HJ-NP-Z\d][A-HJ-NP-Z\d]{4}港|澳$/;
    const rule7 = /^\d{6}使$/;
    const rule8 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}领$/;
    const rule9 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}挂$/;
    const rule10 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z][D|F][A-HJ-NP-Z\d]\d{4}$/;
    const rule11 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z]\d{5}[D|F]$/;

    const str = plate_number.toUpperCase();
    return rule1.test(str) || rule2.test(str) || rule3.test(str) || rule4.test(str)
      || rule5.test(str) || rule6.test(str) || rule7.test(str)
      || rule8.test(str) || rule9.test(str) || rule10.test(str) || rule11.test(str);
  }
}
