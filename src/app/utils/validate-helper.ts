/**
 * Created by zack on 8/2/18.
 */
export class ValidateHelper {

  /** 校验是否为有效电话号码*/
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
   * @returns {boolean}
   */
  public static Length(target: string, min: number, max: number): boolean {
    return (target == null || (target.length >= min && target.length <= max));
  }

  /**
   * 校验非中文的字符串
   * @param {string} param
   * @returns {boolean}
   * @constructor
   */
  public static NotChinese(param: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(param);
  }

  /**
   * 校验年龄
   * @param age
   * @returns {boolean}
   */
  public static Age(age: string): boolean {
    const regex = /^(?:[1-9][0-9]?|1[04][0-9]|150)$/;
    return regex.test(age);
  }
}
