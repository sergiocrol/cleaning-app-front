import React from 'react';

import { Spinner } from './spinner-button.styles';

const SpinnerButton = ({ dotColor }) => {
  return (
    <Spinner dotColor={dotColor}><div></div><div></div><div></div><div></div></Spinner>
  );
}

export default SpinnerButton;