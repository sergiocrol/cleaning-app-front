import React from 'react';
import Carousel from 'nuka-carousel';

import WelcomeSlide from './signup-carousel-slide/welcome-slide.component';
import UserTypeSlide from './signup-carousel-slide/user-type-slide.component';
import ServiceSlide from './signup-carousel-slide/service-slide.component';

import { CarouselContainer } from './signup.styles';

const SignupCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        renderCenterRightControls={() => <button style={{ display: "none" }}></button>}
        renderCenterLeftControls={() => <button style={{ display: "none" }}></button>}
        transitionMode="fade"
        speed={500}
      >
        <WelcomeSlide>1</WelcomeSlide>
        <UserTypeSlide>2</UserTypeSlide>
        <ServiceSlide>3</ServiceSlide>
      </Carousel>
    </CarouselContainer>
  );
}

export default SignupCarousel;