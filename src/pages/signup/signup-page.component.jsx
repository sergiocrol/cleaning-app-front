import React, { useContext, useState } from 'react';

import SignupUser from '../../components/signup/signup-user.component';
import SignupCleaner from '../../components/signup/signup-cleaner.component';
import UserType from '../../components/signup/user-type.component';
import LoginBlock from '../../components/login-block/login-block.component';
import SignupCarousel from '../../components/signup/signup-carousel.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { AuthContext } from '../../contexts/auth-context';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as BlobLogo } from '../../assets/logo/blob-logo.svg';

import { SignupPageContainer, SignupPageHeader, ButtonContainer } from './signup-page.styles';

const SignupPage = () => {
  const [isCleaner, setCleaner] = useState(null);
  const [isRegisterPage, setRegisterPage] = useState(false);

  const value = useContext(AuthContext);

  return (
    <SignupPageContainer isCleaner={isCleaner}>
      {
        isRegisterPage
          ? <>
            <SignupPageHeader isCleaner={isCleaner}>
              <div>
                <div>
                  {isCleaner === null ? <BlobLogo /> : null}
                  <Logo />
                </div>
              </div>
            </SignupPageHeader>
            {isCleaner === null
              ? <UserType setCleaner={setCleaner} />
              : isCleaner
                ? <SignupCleaner value={value} />
                : <SignupUser value={value} />
            }
          </>
          : <>
            <SignupCarousel />
            <ButtonContainer>
              <CustomButton onClick={() => setRegisterPage(true)}>sign up</CustomButton>
            </ButtonContainer>
          </>
      }
      <LoginBlock to={'/login'}>sign in</LoginBlock>
    </SignupPageContainer>
  )
};

export default SignupPage;