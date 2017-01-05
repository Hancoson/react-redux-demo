/**
 * 动作生成器
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import fetch from 'isomorphic-fetch';
import assign from 'object-assign';

export const emptyData = () => {
  return {
    type: 'EMPTYDATA'
  }
}

export const getSuccess = (data) => {
  return {
    type: 'GETSUCCESS',
    data
  }
}

function fetchPosts (){
  console.log(321)
  return dispatch => {
    return fetch('data.json')
      .then((res) => {
        console.log(res.status);
        return res.json()
      })
      .then((data) => {
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



