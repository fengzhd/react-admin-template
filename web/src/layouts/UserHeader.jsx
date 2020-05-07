import React, { Component } from 'react'
import { Avatar, Dropdown, Menu, message, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom'

export class UserHeader extends Component {
  toggle = () => {
    this.props.toggle(!this.props.collapsed)
  };
  logout = () => {
    message.success('退出成功', 1, () => {
      console.log(this.props.history)
      this.props.history.replace('/login')
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <span onClick={this.logout}>退出登录</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="h-full flex j-between a-center">
        <div>
          {
            this.props.collapsed ?
              <MenuUnfoldOutlined onClick={this.toggle}></MenuUnfoldOutlined>
              :
              <MenuFoldOutlined onClick={this.toggle}></MenuFoldOutlined>
          }
          <Breadcrumb className="d-inline-block p-l-20">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar size={30} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    )
  }
}

export default withRouter(UserHeader)
