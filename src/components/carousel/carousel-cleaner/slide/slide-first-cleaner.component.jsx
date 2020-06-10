import React from 'react';
import ReactDOM from 'react-dom';

import StartImage from '../../../../assets/slide/start-image.png'

import { SlideFirstContainer, SlideFirstBody } from '../../carousel-user/slide/slide-first.styles';
import { CarouselButton } from './slide-first-cleaner.styles';

const SlideFirst = ({ elRef }) => {
  return (
    <SlideFirstContainer>
      <img src={StartImage} alt='first steps' />
      <SlideFirstBody>
        <h3>Add your house</h3>
        <span>Add your house's info, so we can search jobs near to you</span>
      </SlideFirstBody>
      {
        elRef.current
          ? ReactDOM.createPortal(
            <CarouselButton to='/cleaner/new-address'>
              Add address
            </CarouselButton>,
            elRef.current)
          : null
      }
    </SlideFirstContainer>
  );
}

export default SlideFirst;