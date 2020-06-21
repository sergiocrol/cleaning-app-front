import React, { useContext } from 'react';

import Login from '../../components/login/login.component';
import LoginBlock from '../../components/login-block/login-block.component';

import { AuthContext } from '../../contexts/auth-context';

import { ReactComponent as BlobLogo } from '../../assets/logo/blob-logo.svg';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

import { LoginPageContainer, LoginPageHeader } from './login-page.styles';

const LoginPage = () => {
  const value = useContext(AuthContext);
  return (
    <LoginPageContainer>
      <LoginPageHeader>
        <div>
          <div>
            <BlobLogo />
            <Logo />
          </div>
        </div>
        {/* <Logo /> */}
      </LoginPageHeader>
      <Login value={value} />
      <LoginBlock to={'/signup'}>sign up</LoginBlock>
    </LoginPageContainer>
  )
};

export default LoginPage;