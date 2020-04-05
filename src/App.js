import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthProvider from './contexts/auth-context';

import LandingPage from './pages/LandingPage';
import SigupPage from './pages/signup/signup-page.component';
import Homepage from './pages/homepage/homepage.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={LandingPage} />
        <AuthProvider>
          <Route exact path='/signup' component={SigupPage} />
          <Route exact path='/homepage' component={Homepage} />
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
