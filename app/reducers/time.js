/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/5.
 */
import actionType from '../constants/actionType';

const timeReducer = (state = '', action) => {

  switch (action.type) {
    case actionType.CHANGETIME:
      return action.data;
    default:
      return state;
  }
};

export default timeReducer;