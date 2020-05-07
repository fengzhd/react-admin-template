import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Index from 'pages/Index'
import Permission from 'pages/Permission'

export class Routers extends Component {
  render() {
    return (
      <div>
        <Route path="/index" component={Index} />
        <Route path="/permission" component={Permission} />
      </div>
    )
  }
}

export default Routers
