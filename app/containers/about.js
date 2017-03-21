/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'

export default class About extends Component {

  render() {

    return (
      <div className="about-warp">
        <section>
          <h1>React-redux Zhihu Daily</h1>
          <ul>
            <li>一个React+Redux版知乎日报 所有API均来自网络（若涉及侵权，请及时联系我删除）</li>
            <li><a href="https://github.com/Hancoson/react-redux-demo" target="_blank"> Github</a>[https://github.com/Hancoson/react-redux-demo]</li>
          </ul>
        </section>
        <section>
          <h1>技术实现</h1>
          <ul>
            <li>采用React+Redux+ES6+webpack+antd实现</li>
            <li>React-hot-load 热替换</li>
          </ul>
        </section>
        <section>
          <h1>运行</h1>
          <ul>
            <li>安装 <code>npm install(yarn)</code></li>
            <li>启动 <code>npm start</code></li>
            <li>构建 <code>npm build</code></li>
          </ul>
        </section>
        <section>
          <h1>目录结构</h1>
          <pre>
            ├─app<br />
            │  ├─actions //redux动作生成器<br />
            │  ├─assets  //静态资源<br />
            │  │  ├─img<br />
            │  │  └─scss<br />
            │  ├─compontens //UI组建<br />
            │  ├─constants  //常量<br />
            │  ├─containers //包装器<br />
            │  ├─reducers //reducers<br />
            │  ├─routes //路由<br />
            │  ├─store //store<br />
            │  └─utils //工具函数<br />
            └─dist //发布目录<br />
            &nbsp;&nbsp;├─js<br />
            &nbsp;&nbsp;└─style
          </pre>
        </section>
      </div>
    )
  }
}