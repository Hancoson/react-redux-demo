/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

export default class NavBar extends Component {
  constructor(porps) {
    super(porps)
  }
  render() {
    return (
      <header>
        <div className='main'>
          <Link to="/" className='logo'></Link>
          <ul className="nav">
            <li>
              <Link to="/about" activeClassName='active'>关于</Link>
            </li>
            <li>
              <Link to="/items" activeClassName='active'>文章</Link>
            </li>
            <li>
              <IndexLink to="/" activeClassName='active'>首页</IndexLink>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}