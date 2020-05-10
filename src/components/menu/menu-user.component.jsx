import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer, ProfileIcon, HomeIcon, NewIcon } from './menu.styles';

const MenuUser = () => {
  const [isActiveButton, setActive] = useState({ new: false, home: true, profile: false });

  const handleActive = (type) => {
    const status = { new: false, home: false, profile: false }
    setActive({ ...status, [type]: true });
  }

  return (
    <MenuContainer>
      <Link to='/user/new-job' onClick={() => handleActive('new')}><NewIcon iscurrent={isActiveButton.new.toString()} /></Link>
      <Link to='/user' onClick={() => handleActive('home')}><HomeIcon iscurrent={isActiveButton.home.toString()} /></Link>
      <Link to='/user/profile' onClick={() => handleActive('profile')}><ProfileIcon iscurrent={isActiveButton.profile.toString()} /></Link>
    </MenuContainer>
  );
}

export default MenuUser;