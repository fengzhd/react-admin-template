import React, { Component } from 'react'
import { Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;


export class SideMenu extends Component {
  constructor() {
    super()
    this.state = {
      menuList: [
        {
          name: '首页',
          key: 0,
          path: '/index',
          icon: <HomeFilled />
        },
        {
          name: '权限页',
          key: 1,
          path: '/permission',
          icon: <HomeFilled />
        },
        {
          name: '图标',
          key: 2,
          path: '/icons',
          icon: <HomeFilled />
        },
        {
          name: '图表',
          key: 3,
          icon: <HomeFilled />,
          children: [
            {
              name: '折线图',
              key: 4,
              path: '/icons',
              icon: <HomeFilled />
            },
            {
              name: '饼图',
              key: 5,
              path: '/icons',
              icon: <HomeFilled />
            },
            {
              name: '地图',
              key: 6,
              path: '/icons',
              icon: <HomeFilled />
            }
          ]
        }
      ]
    }
  }
  menuClick = ({ item, key, keyPath, domEvent }) => {
    let path = item.props.path
    this.props.history.push(path)
  }
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onClick={this.menuClick}>
        {
          this.state.menuList.map(item => {
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
