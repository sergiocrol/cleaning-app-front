import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth-context';
import { HeaderContainer, OptionsContainer, OptionLink, LogoContainer } from './header.styles';


const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">LOGO</Link>
      </LogoContainer>
      <OptionsContainer>
        {
          user._id
            ? <OptionLink to="/" onClick={() => logout()}>LOGOUT</OptionLink>
            : <>
              <OptionLink to="/login">LOGIN</OptionLink>
              <OptionLink to="/signup">SIGNUP</OptionLink>
            </>
        }
      </OptionsContainer>
    </HeaderContainer>
  )
};

export default Header;