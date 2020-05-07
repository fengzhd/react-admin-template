import React, { Component } from 'react'
import { Layout } from 'antd';
import SideMenu from './SideMenu'
import UserHeader from './UserHeader'
import Routers from './Routers'
const { Sider, Header, Content } = Layout;

export class Default extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
  }
  
  toggle = (collapsed) => {
    this.setState({
      collapsed: collapsed
    })
  }
  render() {
    return (
      <Layout className="h-full">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <SideMenu />
        </Sider>
        <Layout>
          <Header className="bg-white p-h-20 w-full sticky top-0 z-index-100">
            <UserHeader collapsed={this.state.collapsed} toggle={this.toggle}/>
          </Header>
          <Content className="p-10">
            <Routers />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Default
