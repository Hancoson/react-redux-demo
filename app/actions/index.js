/**
 * 动作生成器
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import fetch from 'isomorphic-fetch';
import assign from 'object-assign';
import Config from './../constants/config'
import  {getDate} from './../utils/getDate'

export const emptyData = () => {
  return {
    type: 'EMPTYDATA'
  }
}


export const changeTime = (time) => {
  return {
    type: 'CHANGETIME',
    time
  }
}
export const getSuccess = (data) => {
  return {
    type: 'GETSUCCESS',
    data
  }
}

const fetchPosts = () => {
  console.log(Config)
  return dispatch => {
    return fetch(Config.YAHOO + Config.API + getDate() + Config.YAHOO_SUFFIX)
      .then((res) => {
        console.log(res, 1);
        return res.json()
      })
      .then((data) => {
        data = data.query.results.json;
        console.log(data, 2);
        dispatch(getSuccess(data))
      })
      .catch((e) => {
        console.log(e.message)
      })
  }
}

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded() {
  // 它让你选择接下来 dispatch 什么
  return (dispatch) => {
    return dispatch(fetchPosts())
  }
}



