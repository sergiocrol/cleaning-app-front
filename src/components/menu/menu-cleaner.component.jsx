import React from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer, CalendarIcon, HomeIcon, ProfileIcon } from './menu.styles';

const MenuCleaner = () => {
  return (
    <MenuContainer>
      <Link to='/cleaner/calendar'><CalendarIcon iscurrent='false' /></Link>
      <Link to='/cleaner'><HomeIcon iscurrent='false' /></Link>
      <Link to='/cleaner/profile'><ProfileIcon iscurrent='false' /></Link>
    </MenuContainer>
  );
}

export default MenuCleaner;