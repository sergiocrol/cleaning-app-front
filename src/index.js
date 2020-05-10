import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import AuthProvider from './contexts/auth-context';
import LoadingProvider from './contexts/loading-context';

ReactDOM.render(
  <Router>
    <LoadingProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoadingProvider>
  </Router>,
  document.getElementById('root')
);
