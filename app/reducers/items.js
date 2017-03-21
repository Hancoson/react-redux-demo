/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/5.
 */
import actionType from '../constants/actionType';
const _default = {
  data: '',
  stories: []
}
const itemsReducer = (state = _default, action) => {

  switch (action.type) {
    case actionType.GETSUCCESS:
      return action.data;

    case actionType.EMPTYDATA:
      return _default;
    default:
      return state;
  }
};

export default itemsReducer;
