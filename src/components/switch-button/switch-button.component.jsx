import React from 'react';

import { SwitchButtonContainer } from './switch-button.styles';

const SwitchButton = (props) => {
  return (
    <SwitchButtonContainer onChange={() => props.onClick()}>
      <input id="switch-1" type="checkbox" />
      <label htmlFor="switch-1">Switch</label>
    </SwitchButtonContainer>
  );
}

export default SwitchButton;