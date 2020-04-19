import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import LandingPage from './pages/landing-page';
import SigupPage from './pages/signup/signup-page.component';
import LoginPage from './pages/login/login-page.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import PrivateRoute from './components/route/private-route';
import PublicRoute from './components/route/public-route';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Switch>
            <PublicRoute exact path='/' component={LandingPage} />
            <PublicRoute exact path='/signup' component={SigupPage} />
            <PublicRoute exact path='/login' component={LoginPage} />
            <PrivateRoute exact path='/homepage' component={Homepage} />
          </Switch>
        </div>
      </>
    )
  }
}

export default App;
