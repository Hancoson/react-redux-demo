/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/5.
 */
import actionType from '../constants/actionType';

const initialState = {
  data: '',
  stories: []
}

const itemsReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case actionType.GETSUCCESS:
        return action.data;

      case actionType.EMPTYDATA:
        return initialState;
      default:
        return state;
    }
  }
};

export default itemsReducer;
