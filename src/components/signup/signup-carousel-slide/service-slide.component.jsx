import React from 'react';

import { ReactComponent as LogoBold } from '../../../assets/logo/logo-bold.svg';
import { ReactComponent as CleanerImage } from '../../../assets/signup-page/cleaner-landing-image.svg';

import { UserTypeSlideContainer } from './signup-slide.styles';

const ServiceSlide = () => {
  return (
    <UserTypeSlideContainer>
      <LogoBold />
      <CleanerImage />
      <div>
        <h3>Offer or hire a service</h3>
        <p>You can look for the cleaner you prefer, or search that job fit better to you</p>
      </div>
    </UserTypeSlideContainer>
  );
}

export default ServiceSlide;