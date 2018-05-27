/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/3.
 */
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux' // 引入redux createStore、中间件及compose
import createLogger from 'redux-logger' // 利用redux-logger打印日志
let middleware = '';
if (process.env.NODE_ENV == 'production') {
  // 创建一个中间件集合
  middleware = [createSagaMiddleware]
}
else {
  // 调用日志打印方法
  const loggerMiddleware = createLogger()
  // 创建一个中间件集合
  middleware = [createSagaMiddleware, loggerMiddleware]
}

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default finalCreateStore