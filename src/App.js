import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SigupPage from './pages/signup/signup-page.component';
import LoginPage from './pages/login/login-page.component';
import Homepage from './pages/homepage/homepage.component';
import UserPage from './pages/user/user-page.component';
import CleanerPage from './pages/cleaner/cleaner-page.component';
import PrivateRoute from './components/route/private-route';
import PublicRoute from './components/route/public-route';
import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from './global.styles';

import lightTheme from './themes/light';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Spinner />
        <Switch>
          <PrivateRoute exact path='/' component={Homepage} />
          <PrivateRoute path='/user' component={UserPage} />
          <Route path='/cleaner' component={CleanerPage} />
          <PublicRoute exact path='/signup' component={SigupPage} />
          <PublicRoute exact path='/login' component={LoginPage} />
        </Switch>
      </ThemeProvider>
    )
  }
}

export default App;
