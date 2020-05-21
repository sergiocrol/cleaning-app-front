import React from 'react';

import { StarsOuter, StarsInner } from './rate.styles';

const Rate = ({ rate }) => {
  return (
    <StarsOuter>
      <StarsInner rate={rate} />
    </StarsOuter>
  );
}

export default Rate;