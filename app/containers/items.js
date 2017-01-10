/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, DatePicker } from 'antd';
import { fetchPostsIfNeeded, emptyData } from '../actions/index'
import ItemsList from '../compontens/itemsList'
import {timeClear} from './../utils/getDate'

class Items extends Component {

  disabledDate(current) {
    // can not select days before today and today
    return current && current.valueOf() > Date.now();
  }

  handleClick(value, dateString) {
    console.log(timeClear(dateString));
    return dispatch => {
      return dispatch(getSuccess(data))
    }
  }

  render() {
    console.log(this.props);
    const {items, emptyData} = this.props

    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker disabledDate={this.disabledDate} onChange={this.handleClick.bind(this)} />
          <Button className='fr' onClick={() => emptyData()}>清除数据</Button>
        </div>
        <div className="main">
          <ItemsList list={items} />
        </div>
      </div>
    )
  }
  componentDidMount(){
    const {fetchPostsIfNeeded} = this.props;
    //默认调取数据
    fetchPostsIfNeeded()
  }
}

const getItems = state => {
  return {
    items: state.itemsReducer
  }
}

export default connect(
  getItems,
  { fetchPostsIfNeeded, emptyData }
)(Items)