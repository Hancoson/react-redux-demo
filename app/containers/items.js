/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'
import { Input, Button, DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

export default class Items extends Component {

  disabledDate(current) {
    // can not select days before today and today
    return current && current.valueOf() > Date.now();
  }
  handleClick(e,t){
    console.log(t)
  }

  render() {
    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker disabledDate={this.disabledDate} onChange={this.handleClick.bind(this,value)}/>
        </div>
      </div>
    )
  }
}