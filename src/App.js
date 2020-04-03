import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthProvider from './contexts/auth-context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <LandingPage />
      </Router>
    )
  }
}

export default App;
