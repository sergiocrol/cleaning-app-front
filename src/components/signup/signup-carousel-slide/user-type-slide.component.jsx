import React from 'react';

import { ReactComponent as LogoBold } from '../../../assets/logo/logo-bold.svg';
import { ReactComponent as UserImage } from '../../../assets/signup-page/user-landing-image.svg';

import { UserTypeSlideContainer } from './signup-slide.styles';

const UserTypeSlide = () => {
  return (
    <UserTypeSlideContainer>
      <LogoBold />
      <UserImage />
      <div>
        <h3>Register as user or cleaner</h3>
        <p>Join us as cleaner or as user; come and meet our big community</p>
      </div>
    </UserTypeSlideContainer>
  );
}

export default UserTypeSlide;