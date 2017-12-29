/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由

import App from './../compontens/app'
import Index from './../compontens/index'
import About from './../compontens/about'
import Items from './../containers/items'
import Detail from './../containers/detail'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
    <Route path="items" component={Items} />
    <Route path="news/:id" component={Detail} />
  </Route>
)