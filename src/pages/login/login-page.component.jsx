import React, { useContext } from 'react';

import Login from '../../components/login/login.component';
import LoginBlock from '../../components/login-block/login-block.component';
import { AuthContext } from '../../contexts/auth-context';

import { LoginPageContainer } from './login-page.styles';

const LoginPage = () => {
  const value = useContext(AuthContext);
  return (
    <LoginPageContainer>
      <h1>m a e ● m a e</h1>
      <Login value={value} />
      <LoginBlock to={'/signup'}>create an account</LoginBlock>
    </LoginPageContainer>
  )
};

export default LoginPage;