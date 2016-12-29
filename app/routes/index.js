/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React from 'react' // 引入react
import {Route, IndexRoute} from 'react-router' // 引入react路由

import App from './../containers/app'
import Index from './../containers/index'
import About from './../containers/about'
import A1 from './../containers/a1'
import Home from './../containers/home'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="about" component={About}/>
    <Route path="a1" component={A1}/>
    <Route path="home" component={Home}/>
  </Route>
)