/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, {Component} from 'react'

import NavBar from '../compontens/navBar'

export default class App extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="main">
        <NavBar pathname={this.props.location.pathname} />
        <section className="main">
          {this.props.children}
        </section>
      </div>
    )
  }
}