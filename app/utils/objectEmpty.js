/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/11.
 */

export const isEmptyObject = obj => {
  for (var key in obj) {
    return false;
  }
  return true;
}