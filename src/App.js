import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import SigupPage from './pages/signup/signup-page.component';
import LoginPage from './pages/login/login-page.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import PrivateRoute from './components/route/private-route';
import PublicRoute from './components/route/public-route';

import { GlobalStyle } from './global.styles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <div>
          <Switch>
            <PrivateRoute exact path='/' component={Homepage} />
            <PublicRoute exact path='/signup' component={SigupPage} />
            <PublicRoute exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </>
    )
  }
}

export default App;
