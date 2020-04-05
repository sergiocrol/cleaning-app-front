import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, error, ...otherProps }) => (
  <div className='form-input-group'>
    <input className='form-input' {...otherProps} />
    {
      label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
        : null
    }
    <span className='error-message'>{error}</span>
  </div>
);

export default FormInput;