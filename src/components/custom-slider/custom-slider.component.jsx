import React from 'react';

import { SliderContainer, Slider, SliderText, SliderValue, SliderTextContainer } from './custom-slider.styles';

const CustomSlider = ({ ...props }) => {
  return (
    <SliderContainer>
      <Slider {...props} />
      <SliderTextContainer>
        <SliderText>price per hour</SliderText>
        <SliderValue>{props.value}</SliderValue>
      </SliderTextContainer>
    </SliderContainer>
  )
}

export default CustomSlider;