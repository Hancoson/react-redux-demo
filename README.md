# React-redux Zhihu Daily
[![GitHub package version](https://img.shields.io/github/package-json/v/Hancoson/react-redux-demo.svg)](https://github.com/Hancoson/react-redux-demo)
[![GitHub license](https://img.shields.io/github/license/Hancoson/react-redux-demo.svg)](https://github.com/Hancoson/react-redux-demo/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/Hancoson/react-redux-demo/master.svg)](https://travis-ci.org/Hancoson/react-redux-demo)

> 一个React+Redux版知乎日报 所有API均来自网络（若涉及侵权，请及时联系我删除）

> _你觉得好就给个 Star 或者 Watch 吧，不要 Fork._

### [DEOM](https://hancoson.github.io/react-redux-demo)
### [Mobx 版本](https://github.com/Hancoson/react-mobx-demo)

## 技术实现
- [x] React
- [x] Redux
- [x] React-router
- [x] fetch
- [x] ES6
- [x] webpack
- [x] antd
- [x] babel
- [x] react-hot-loader
 
## 运行
- 安装 `npm install(yarn)`
- 启动 `npm start`
- 构建 `npm run build`
 
## 目录结构
```$xslt
├─app
│  ├─actions //redux动作生成器
│  ├─assets  //静态资源
│  │  ├─img
│  │  └─scss
│  ├─compontens //UI组建
│  ├─constants  //常量
│  ├─containers //包装器
│  ├─reducers //reducers
│  ├─routes //路由
│  ├─store //store
│  └─utils //工具函数
└─dist //发布目录
    ├─js
    └─style
```

## API说明

本应用调用了开源的「知乎日报 API」，具体可参考官方文档，[传送门>>](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

## 数据获取
- 采用Yahoo跨域访问代理
```$xslt
YAHOO:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22',
YAHOO_SUFFIX:'%22&format=json'
```
