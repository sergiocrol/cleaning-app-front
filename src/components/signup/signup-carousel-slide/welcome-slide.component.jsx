import React from 'react';

import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { ReactComponent as BlobLogo } from '../../../assets/logo/blob-logo.svg';

import { WelcomeSlideContainer } from './signup-slide.styles';

const WelcomeSlide = () => {
  return (
    <WelcomeSlideContainer>
      <div>
        <div>
          <BlobLogo />
          <Logo />
        </div>
      </div>
      {/* <Logo /> */}
      <div>
        <h3>Welcome to maemae</h3>
        <p>Join us and find the cleaner you need, or offer your service</p>
      </div>
    </WelcomeSlideContainer>
  );
}

export default WelcomeSlide;