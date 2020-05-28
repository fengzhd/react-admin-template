import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Default from 'layouts/Default';
import Login from 'pages/Login'
import Notfind from 'pages/Notfind'

function App() {
  let isLogin = sessionStorage.getItem('userInfo');
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/index" />} />
        <Route exact path='/login' render={() => isLogin ? <Redirect to="/" /> : <Login />}></Route>
        <Route path='/404' component={Notfind}></Route>
        <Route path='/' component={Default}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
