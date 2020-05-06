import React from 'react';

import { SelectButtonContainer } from './form-select.styles';

const FormSelect = ({ children, ...otherProps }) => (
  <SelectButtonContainer {...otherProps}>
    {children}
  </SelectButtonContainer>
);

export default FormSelect;