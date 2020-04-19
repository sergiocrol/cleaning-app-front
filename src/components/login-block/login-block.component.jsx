import React from 'react';

import { Bar, BarContainer, OptionLink } from './login-block.styles';

const LoginBlock = ({ to, children }) => (
  <>
    <BarContainer>
      <Bar />
    </BarContainer>
    <OptionLink to={to}>{children}</OptionLink>
  </>
);

export default LoginBlock