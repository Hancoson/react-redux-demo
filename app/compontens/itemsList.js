/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/01/06.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col, Spin, Button, DatePicker} from 'antd';
import {subString, timeClear} from './../utils/getDate'

export default class Items extends Component {
  constructor(porps) {
    super(porps);
  }

  disabledDate(current) {
    // can not select days before today and today
    return current && current.valueOf() > Date.now();
  }

  handleClick(value, dateString) {
    const {fetchData, emptyData} = this.props;
    emptyData()
    fetchData(timeClear(dateString));
  }
  componentWillMount() {
    const {emptyData} = this.props;
    //清空原有的数据
    emptyData()
  }

  render() {
    const {items, emptyData} = this.props
    const list = items
    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker
            disabledDate={this.disabledDate}
            onChange={this
            .handleClick
            .bind(this)}/>
          <Button className='fr' onClick={() => emptyData()}>清除数据</Button>
        </div>
        <div className="main">
          <div className="gutter-example">
            {list.stories.length > 0
              ? <Row gutter={16}>
                  {list
                    .stories
                    .map((e, index) => <Col className="gutter-row" span={6} key={index}>
                      <Link className="item" to={'news/' + e.id}>
                        <img src={e.images}/>
                        <p>{e.title}</p>
                        <sub>{subString(list.date)}</sub>
                      </Link>
                    </Col>)}
                </Row>
              : <div className="loading">
                <Spin size="large"/>
              </div>
}

          </div>
          {/*<ItemsList list={items}/>*/}
        </div>
      </div>

    )
  }

  componentDidMount() {
    const {defaultFetchData} = this.props;
    //默认调取数据
    defaultFetchData()
  }
}