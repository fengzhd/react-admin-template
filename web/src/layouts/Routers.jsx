import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import menuList from './router'
export class Routers extends Component {
  render() {
    let isLogin = sessionStorage.getItem('userInfo');
    return (
      <div>
        <Switch>
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
          <Redirect key={-2} to={{ pathname: "/404" }} />
        </Switch>
      </div>
    )
  }
}

export default Routers
