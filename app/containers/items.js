/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input, Button, DatePicker} from 'antd';
const RangePicker = DatePicker.RangePicker;
import {fetchPostsIfNeeded,emptyData} from '../actions/index'

class Items extends Component {

  disabledDate(current) {
    // can not select days before today and today
    return current && current.valueOf() > Date.now();
  }

  handleClick(value, dateString) {
    console.log(dateString)
  }

  render() {
    const {lists, fetchPostsIfNeeded, emptyData} = this.props
    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker disabledDate={this.disabledDate} onChange={this.handleClick.bind(this)}/>
        </div>
        <div className="">
          <Button onClick={() => fetchPostsIfNeeded()}>加载数据</Button>
          <Button onClick={() => emptyData()}>清除数据</Button>
          {lists.map((e, index) =>
            <div className="well well-sm" key={index}><a href={e.url} target="_blank">{e.title}</a></div>
          )}
        </div>
      </div>
    )
  }
}

const getList = state => {
  return {
    lists: state.items
  }
}

export default connect(
  getList,
  {fetchPostsIfNeeded, emptyData}
)(Items)