import React from 'react';

import { OptionLink, BarContainer } from './login-block.styles';

const LoginBlock = ({ to, children }) => (
  <BarContainer>
    {`I ${to === '/login' ? 'already' : `don't`} have an account`}<OptionLink to={to}>{children}</OptionLink>
  </BarContainer>
);

export default LoginBlock