import React, { Component, Suspense, lazy } from 'react'
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
              // <Route key={item.key} path={item.path} component={require('pages/' + item.component).default} />
              <Suspense fallback={<div>Loading...</div>}>
                {
                  isLogin ? 
                  (
                    <Route key={item.key} path={item.path} component={item.component} />
                  )
                  : 
                  (
                    <Redirect to={{ pathname: "/login"}}/>
                  )
                }
              </Suspense>
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
