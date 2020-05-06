import React from 'react';

import { FormInputContainer, FormInputItem, ErrorMessage } from './form-input.styles';

const FormInput = ({ label, error, register, required, pattern, validate, min, ...otherProps }) => {
  return (
    <FormInputContainer {...otherProps}>
      <FormInputItem {...otherProps} ref={register({ required, pattern, validate, min })} placeholderTextColor={'red'} />
      <ErrorMessage>{error}</ErrorMessage>
    </FormInputContainer>
  )
};

export default FormInput;