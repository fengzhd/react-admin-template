import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Index from 'pages/Index'
import Permission from 'pages/Permission'
import ReduxDemo from 'pages/Redux'

export class Routers extends Component {
  render() {
    return (
      <div>
        <Route path="/index" component={Index} />
        <Route path="/permission" component={Permission} />
        <Route path="/redux" component={ReduxDemo} />
      </div>
    )
  }
}

export default Routers
