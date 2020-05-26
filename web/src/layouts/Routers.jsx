import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

import menuList from './router'
export class Routers extends Component {
  render() {
    let isLogin = true;
    return (
      <div>
        {
          menuList.map(item => {
            return (
              isLogin ?
                (
                  <Route key={item.key} path={item.path} component={item.component} />
                )
                :
                (
                  <Redirect key={-1} to={{ pathname: "/login" }} />
                )
            )
          })
        }
      </div>
    )
  }
}

export default Routers
