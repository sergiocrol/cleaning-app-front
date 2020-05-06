import React, { useContext, useState } from 'react';

import SignupUser from '../../components/signup/signup-user.component';
import SignupCleaner from '../../components/signup/signup-cleaner.component';
import UserType from '../../components/signup/user-type.component';
import LoginBlock from '../../components/login-block/login-block.component';
import { AuthContext } from '../../contexts/auth-context';

import { SignupPageContainer, SignupPageHeader, HeaderImage } from './signup-page.styles';

const SignupPage = () => {
  const [isCleaner, setCleaner] = useState(null);

  const value = useContext(AuthContext);

  return (
    <SignupPageContainer>
      <SignupPageHeader isCleaner={isCleaner}>
        <HeaderImage isCleaner={isCleaner} />
      </SignupPageHeader>
      {isCleaner === null
        ? <UserType setCleaner={setCleaner} />
        : isCleaner
          ? <SignupCleaner value={value} />
          : <SignupUser value={value} />
      }
      <LoginBlock to={'/login'}>login</LoginBlock>
    </SignupPageContainer>
  )
};

export default SignupPage;