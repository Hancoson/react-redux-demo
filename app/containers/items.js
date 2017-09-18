/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts, emptyData} from '../actions/index'
import Items from '../compontens/itemsList'
import {getDate} from './../utils/getDate'

//通过日期选择获取数据
const fetchData = (t) => {
  return (dispatch) => {
    return dispatch(fetchPosts(t))
  }
}
// 默认获取数据
const defaultFetchData = () => {
  return (dispatch) => {
    return dispatch(fetchPosts(getDate()))
  }
}

const getItems = state => {
  return {items: state.itemsReducer}
}

/**
 * @getItems (state)
 * @defaultFetchData, @fetchData, @emptyData (dispatch)
 */
export default connect(getItems, {defaultFetchData, fetchData, emptyData})(Items)