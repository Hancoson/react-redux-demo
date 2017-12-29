/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import Promise from 'promise-polyfill' //支持IE
import React from 'react'  // 引入React
import { render } from 'react-dom' // 引入render方法
import { Provider } from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import { Router, hashHistory } from 'react-router' // Browser history 是由 React Router 创建浏览器应用推荐的 history
//使用 hashHistory，浏览器上看到的 url 会是这样的: /#/a/a1?_k=adseis
//使用 browserHistory,需要服务端的支持，浏览器上看到的 url 会是这样的：/a/a1
import { syncHistoryWithStore } from 'react-router-redux' // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件 

import finalCreateStore from './store/configureStore'  //引入store配置
import reducer from './reducers'  // 引入reducers集合
import routes from './routers'   // 引入路由配置

import './assets/scss/main.scss'  // 引入样式文件

// To add to window  
if (!window.Promise) window.Promise = Promise;

// 给增强后的store传入reducer
const store = finalCreateStore(reducer);

// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
