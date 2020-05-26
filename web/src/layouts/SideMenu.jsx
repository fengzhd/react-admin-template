import React, { Component } from 'react'
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import menuList from './router'
const { SubMenu } = Menu;


export class SideMenu extends Component {
  menuClick = ({ item, key, keyPath, domEvent }) => {
    let path = item.props.path
    this.props.history.push(path)
  }
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onClick={this.menuClick}>
        {
          menuList.map(item => {
            return (
              item.children ?
                <SubMenu key={item.key} icon={item.icon} title={item.name}>
                  {
                    item.children.map(children => {
                      return (
                        <Menu.Item key={children.key} path={children.path} icon={item.icon}>
                          {children.name}
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
                :
                <Menu.Item key={item.key} path={item.path} icon={item.icon}>
                  {item.name}
                </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}

export default withRouter(SideMenu)
