/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React,{Compontent} from 'react'
import {Link} from 'react-router'

export default class NavBar extends Compontent{
  constructor(porps){
    super(porps)
  }
  render(){
    <nav>
      <ul>
        <li>
          <Link to="/">首页</Link>
          <Link to="/list">列表</Link>
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </nav>
  }
}