import React, { useContext, useState } from 'react';

import SignupUser from '../../components/signup/signup-user.component';
import SignupCleaner from '../../components/signup/signup-cleaner.component';
import UserType from '../../components/signup/user-type.component';
import LoginBlock from '../../components/login-block/login-block.component';
import { AuthContext } from '../../contexts/auth-context';

import { SignupPageContainer } from './signup-page.styles';

const SignupPage = () => {
  const [isCleaner, setCleaner] = useState(null);

  const value = useContext(AuthContext);

  return (
    <SignupPageContainer>
      <h1>m a e ● m a e</h1>
      {isCleaner === null
        ? <UserType setCleaner={setCleaner} />
        : isCleaner
          ? <SignupCleaner value={value} />
          : <SignupUser value={value} />
      }
      <LoginBlock to={'/login'}>I already have an account</LoginBlock>
    </SignupPageContainer>
  )
};

export default SignupPage;