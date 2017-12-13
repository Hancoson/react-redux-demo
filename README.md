# React-redux Zhihu Daily
> 一个React+Redux版知乎日报 所有API均来自网络（若涉及侵权，请及时联系我删除）

> _你觉得好就给个 Star 或者 Watch 吧，不要 Fork._

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

### 1、获取单条消息
- URL: `http://news-at.zhihu.com/api/4/news/{id}`
- 分析：
    * `body` : HTML 格式的新闻
    * `image-source` : 图片的内容提供方。为了避免被起诉非法使用图片，在显示图片时最好附上其版权信息。
    * `title` : 新闻标题
    * `image` : 获得的图片同 `最新消息` 获得的图片分辨率不同。这里获得的是在文章浏览界面中使用的大图。
    * `share_url` : 供在线查看内容与分享至 SNS 用的 URL
    * `js` : 供手机端的 WebView(UIWebView) 使用
    * `recommenders` : 这篇文章的推荐者
    * `ga_prefix` : 供 Google Analytics 使用
    * `section` : 栏目的信息
        * `thumbnail` : 栏目的缩略图
        * `id` : 该栏目的 `id`
        * `name` : 该栏目的名称
    * `type` : 新闻的类型
    * `id` : 新闻的 id
    * `css` : 供手机端的 WebView(UIWebView) 使用
        * 可知，知乎日报的文章浏览界面利用 WebView(UIWebView) 实现
        
### 2. 消息列表
* URL: `http://news-at.zhihu.com/api/4/news/before/{date}`  
* 响应实例：
```
{
	date: "20131118",
	stories: [
		{
			title: "深夜食堂 · 我的张曼妮",
			ga_prefix: "111822",
			images: [
				"http://p4.zhimg.com/7b/c8/7bc8ef5947b069513c51e4b9521b5c82.jpg"
			],
			type: 0,
			id: 1747159
		},
	...
	]
}
```
* 格式与前同，恕不再赘述

## 数据获取
- 采用Yahoo跨域访问代理
```$xslt
YAHOO:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22',
YAHOO_SUFFIX:'%22&format=json'
```
