import React, { useContext } from 'react';

import Login from '../../components/login/login.component';
import LoginBlock from '../../components/login-block/login-block.component';
import { AuthContext } from '../../contexts/auth-context';

import { LoginPageContainer, LoginPageHeader, HeaderImage } from './login-page.styles';

const LoginPage = () => {
  const value = useContext(AuthContext);
  return (
    <LoginPageContainer>
      <LoginPageHeader>
        <HeaderImage />
      </LoginPageHeader>
      <Login value={value} />
      <LoginBlock to={'/signup'}>signup</LoginBlock>
    </LoginPageContainer>
  )
};

export default LoginPage;