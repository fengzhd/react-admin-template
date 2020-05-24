import React, { Component } from 'react'
import { Button, List } from 'antd';
import { getListData } from 'actions/newsList'
import { connect } from 'react-redux'

export class NewsList extends Component {
  getList = () => {
    this.props.dispatch(getListData())
  }
  render() {
    return (
      <div className="w-300">
        <Button type="primary" onClick={this.getList}>获取数据</Button>
        <List bordered size="default" loading={this.props.isLoading} className="h-300 o-y-scroll bg-white m-t-10">
          {
            this.props.newsList.map(item => {
              return (
                <List.Item key={item.id}>{item.name}</List.Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.newsList.isLoading,
    newsList: state.newsList.list
  }
}

export default connect(mapStateToProps)(NewsList)
