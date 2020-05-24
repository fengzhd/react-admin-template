import React, { Component } from 'react'
import { Route } from 'react-router-dom';
// import Index from 'pages/Index'
// import Permission from 'pages/Permission'
// import Redux from 'pages/Redux'
// import Hook from 'pages/Hook'
import { menuList } from './SideMenu'
export class Routers extends Component {
  render() {
    return (
      <div>
        {
          menuList.map(item => {
            return (
              <Route key={item.key} path={item.path} component={require('pages/' + item.component).default} />
            )
          })
        }
        {/* <Route path="/index" component={Index} />
        <Route path="/permission" component={Permission} />
        <Route path="/redux" component={Redux} />
        <Route path="/hook" component={Hook} /> */}
      </div>
    )
  }
}

export default Routers
