import React, { useContext } from 'react';

import Signup from '../../components/signup/signup.component';
import LoginBlock from '../../components/login-block/login-block.component';
import { AuthContext } from '../../contexts/auth-context';

import { SignupPageContainer } from './signup-page.styles';

const SignupPage = () => {
  const value = useContext(AuthContext);
  return (
    <SignupPageContainer>
      <h1>m a e ● m a e</h1>
      <Signup value={value} />
      <LoginBlock to={'/login'}>I already have an account</LoginBlock>
    </SignupPageContainer>
  )
};

export default SignupPage;