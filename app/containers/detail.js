/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import {connect} from 'react-redux'
import {fetchDetailPosts, emptyData} from '../actions/index'
import Detail from '../compontens/detail'

const fetchDetailData = id => {
  return (dispatch) => {
    return dispatch(fetchDetailPosts(id))
  }
}
const getDetail = state => {
  return {detail: state.detailReducer}
}

export default connect(getDetail, {fetchDetailData, emptyData})(Detail)