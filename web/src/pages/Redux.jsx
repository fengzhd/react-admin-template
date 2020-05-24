import React, { Component } from 'react'
import Counter from 'components/redux/Counter'
import NewsList from 'components/redux/NewsList'
import { Divider } from 'antd';


export class ReduxDemo extends Component {
  render() {
    return (
      <div>
        {/* 计数器例子 */}
        <Counter />
        <Divider />
        {/* 异步actions, 获取列表 */}
        <NewsList />
      </div>
    )
  }
}


export default ReduxDemo
