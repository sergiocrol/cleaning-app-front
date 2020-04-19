import React from 'react';

import { FormInputContainer, FormInputItem, FormInputLabel, ErrorMessage } from './form-input.styles';

const FormInput = ({ label, error, register, required, pattern, validate, ...otherProps }) => {
  return (
    <FormInputContainer>
      <FormInputItem {...otherProps} ref={register({ required, pattern, validate })} />
      {
        label ?
          (<FormInputLabel content={otherProps.content}>
            {label}
          </FormInputLabel>)
          : null
      }
      <ErrorMessage>{error}</ErrorMessage>
    </FormInputContainer>
  )
};

export default FormInput;