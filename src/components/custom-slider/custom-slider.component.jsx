import React from 'react';

import { SliderContainer, Slider, SliderText, SliderValue, SliderTextContainer } from './custom-slider.styles';

const CustomSlider = ({ ...props }) => {
  return (
    <SliderContainer>
      <Slider {...props} />
      <SliderTextContainer>
        <SliderText>{props.min}{props.isTotalPrice ? '€' : '€/h'}</SliderText>
        <SliderValue>{props.value}{props.isTotalPrice ? '€' : '€/h'}</SliderValue>
      </SliderTextContainer>
    </SliderContainer>
  )
}

export default CustomSlider;