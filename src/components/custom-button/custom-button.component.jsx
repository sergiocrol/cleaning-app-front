import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;