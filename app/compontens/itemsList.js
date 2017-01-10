/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/01/06.
 */
import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import {Row, Col, Spin} from 'antd';
import Config from './../constants/config'
import {subString} from './../utils/getDate'

export default class ItemsList extends Component {
  constructor(porps) {
    super(porps);
  }

  render() {
    const items = this.props.list
    return (
      <div className="gutter-example">
        {
          items.stories.length > 0 ?
            <Row gutter={16}>
              {items.stories.map((e, index) =>
                <Col className="gutter-row" span={6} key={index}>
                  <a className="item" href={Config.URL_PREFIX+e.id} target="_blank">
                    <img src={e.images}/>
                    <p>{e.title}</p>
                    <sub>{subString(items.date)}</sub>
                  </a>
                </Col>
              )}
            </Row> :
            <div className="loading">
              <Spin size="large"/>
            </div>
        }

      </div>
    )
  }
}