import React, { useContext } from 'react';

import Signup from '../../components/signup/signup.component';
import { AuthContext } from '../../contexts/auth-context';

import './signup-page.styles.scss';

const SignupPage = () => {
  const value = useContext(AuthContext);
  return (
    <div className='signup-page'>
      <h1>Signup page</h1>
      <Signup value={value} />
    </div>
  )
};

export default SignupPage;