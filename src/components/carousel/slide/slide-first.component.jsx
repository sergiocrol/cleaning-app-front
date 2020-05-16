import React from 'react';

import StartImage from '../../../assets/slide/start-image.png'

import { SlideFirstContainer, SlideFirstBody } from './slide-first.styles';

const SlideFirst = () => {
  return (
    <SlideFirstContainer>
      <img src={StartImage} alt='first steps' />
      <SlideFirstBody>
        <h3>Add your house</h3>
        <span>Add your house's info, so we can calculate an estimated time for complete a job</span>
      </SlideFirstBody>
    </SlideFirstContainer>
  );
}

export default SlideFirst;