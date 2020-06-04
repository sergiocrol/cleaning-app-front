import React from 'react';

import SwitchButton from '../switch-button/switch-button.component';
import CustomSlider from '../custom-slider/custom-slider.component';

import { FilterPriceContainer, SwitchButtonContainer, CustomSliderContainer } from './filter-price.styles';

const FilterPrice = ({ value, min, max, isTotalPrice, togglePrice, noSwitchButton, onChange }) => {
  return (
    <FilterPriceContainer>
      <CustomSliderContainer isTotalPrice={isTotalPrice}>
        <CustomSlider type="range" min={min} max={max} value={value} name="fee" isTotalPrice={isTotalPrice} onChange={onChange} />
      </CustomSliderContainer>
      {
        noSwitchButton
          ? null
          : <SwitchButtonContainer>
            <SwitchButton onClick={togglePrice} /><span>{isTotalPrice ? 'total' : '€/h'}</span>
          </SwitchButtonContainer>
      }
    </FilterPriceContainer>
  );
}

export default FilterPrice;