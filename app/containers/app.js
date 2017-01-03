/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'

import NavBar from '../compontens/navBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="main">
          {this.props.children}
        </section>
      </div>
    )
  }
}