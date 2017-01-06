/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/01/06.
 */
import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

import { Row, Col } from 'antd';
export default class ItemsList extends Component {
  constructor(porps) {
    super(porps);
  }
  render() {
    const items=this.props.list
    return (
      <div className="gutter-example">
        <Row gutter={10}>
          {items.map((e, index) =>
            <Col className="gutter-row" span={7} key={index}>
              <a href={e.url} target="_blank">{e.title}</a>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}