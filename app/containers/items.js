/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input, Button, DatePicker} from 'antd';
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
    console.log(this.props);
    const {items, fetchPostsIfNeeded, emptyData} = this.props

    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker disabledDate={this.disabledDate} onChange={this.handleClick.bind(this)}/>
          <Button onClick={() => fetchPostsIfNeeded()}>加载数据</Button>
          <Button onClick={() => emptyData()}>清除数据</Button>
        </div>
        <div className="">

          {items.map((e, index) =>
            <div className="well well-sm" key={index}><a href={e.url} target="_blank">{e.title}</a></div>
          )}
        </div>
      </div>
    )
  }
}

const getItems = state => {
  console.log(state,'-----');
  return {
    items: state.itemsReducer
  }
}

export default connect(
  getItems,
  {fetchPostsIfNeeded, emptyData}
)(Items)