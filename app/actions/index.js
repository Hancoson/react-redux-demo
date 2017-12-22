/**
 * 动作生成器
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import fetch from 'isomorphic-fetch';
import assign from 'object-assign';
import Config from './../constants/config'

export const emptyData = () => {
  return {
    type: 'EMPTYDATA'
  }
}

/**
 * 获取列表数据
 * 异步 action 返回函数 参数为 dispatch
 * @param {*} time 
 */
export const fetchPosts = (time) => {
  return dispatch => {
    return fetch(Config.YAHOO + Config.API + time + Config.YAHOO_SUFFIX)
      .then(res => {
        return res.json()
      })
      .then(data => {
        data = data.query.results.json;
        dispatch({
          type: 'GETSUCCESS',
          data: assign({}, data)
        })
      })
      .catch(e => {
        console.log(e.message)
      })
  }
}

//获取单条数据
export const fetchDetailPosts = (id) => {
  return dispatch => {
    return fetch(Config.YAHOO + Config.NEWS + id + Config.YAHOO_SUFFIX)
      .then(res => {
        return res.json()
      })
      .then(data => {
        data = data.query.results.json;
        console.log(data)
        dispatch({
          type: 'DETAILDATA',
          data: assign({}, data)
        })
      })
      .catch(e => {
        console.log(e.message)
      })
  }
}




