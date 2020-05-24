import React, { Component } from 'react'
import Counter from 'components/redux/Counter'
import NewsList from 'components/redux/NewsList'
import { Divider, Row, Col } from 'antd';
import { connect } from 'react-redux'
import ReactJson from 'react-json-view'


export class Redux extends Component {
  render() {
  console.log(this.props)
    return (
      <Row>
        <Col span={12}>
          <div>
            {/* 计数器例子 */}
            <h1>触发同步action</h1>
            <Counter />
            <Divider />
            {/* 异步actions, 获取列表 */}
            <h1>触发异步action</h1>
            <NewsList />
          </div>
        </Col>
        <Col span={12}>
          <h1>state结构</h1>
          <div className="h-500 o-y-scroll">
            <ReactJson src={this.props.state} />
          </div>
        </Col>
      </Row>

    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Redux)
