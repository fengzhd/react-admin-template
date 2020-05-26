import Index from 'pages/Index'
import Permission from 'pages/Permission'
import Redux from 'pages/Redux'
import Hook from 'pages/Hook'

const menuList = [
  {
    name: '首页',
    key: 0,
    path: '/index',
    component: Index,
    // icon: <HomeFilled />
  },
  {
    name: 'Redux',
    key: 1,
    path: '/redux',
    component: Redux,
    // icon: <HomeFilled />
  },
  {
    name: 'Hook',
    key: 2,
    path: '/hook',
    component: Hook,
    // icon: <HomeFilled />
  },
  {
    name: '权限页',
    key: 3,
    path: '/permission',
    component: Permission,
    // icon: <HomeFilled />
  },
  // {
  //   name: '图标',
  //   key: 4,
  //   path: '/icons',
  //   icon: <HomeFilled />
  // },
  // {
  //   name: '图表',
  //   key: 5,
  //   icon: <HomeFilled />,
  //   children: [
  //     {
  //       name: '折线图',
  //       key: 6,
  //       path: '/icons',
  //       icon: <HomeFilled />
  //     },
  //     {
  //       name: '饼图',
  //       key: 7,
  //       path: '/icons',
  //       icon: <HomeFilled />
  //     },
  //     {
  //       name: '地图',
  //       key: 8,
  //       path: '/icons',
  //       icon: <HomeFilled />
  //     }
  //   ]
  // }
]

export default menuList