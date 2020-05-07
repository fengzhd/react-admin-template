import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Default from 'layouts/Default';
import Login from 'pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Redirect to="/index" />} />
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Default}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
