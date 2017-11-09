/**
 *
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/10.
 */
//获取当天时间并格式化
export const getDate = () => {
  let d = new Date();
  let m = d.getMonth() + 1;
  let dd = d.getDate();
  if (m < 10) {
    m = '0' + m.toString()
  }
  if (dd < 10) {
    dd = '0' + dd.toString()
  }
  let str = d
    .getFullYear()
    .toString() + m + dd.toString();
  return str
}

//格式化时间
export const subString = str => {
  let _y = '',
    _m = '',
    _d = '';
  _y = str.substring(0, 4);
  _m = str.substring(4, 6);
  _d = str.substring(6, 8);
  return (_y + '/' + _m + '/' + _d)

}
//格式化时间
export const timeClear = str => {
  let _t = '';
  str
    .split('-')
    .forEach((i) => {
      _t = _t + i.toString()
    })
  return _t

}