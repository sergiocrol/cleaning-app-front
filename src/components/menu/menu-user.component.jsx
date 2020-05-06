import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { MenuContainer, ProfileIcon, HomeIcon, NewIcon } from './menu.styles';

const MenuUser = ({ match, path, location }) => {
  const [redirect, setRedirect] = useState('');
  const [isActiveButton, setActive] = useState({ new: false, home: true, profile: false });

  const handleActive = (type) => {
    const status = { new: false, home: false, profile: false }
    setActive({ ...status, [type]: true });
  }

  return (
    <>
      {redirect ? <Redirect to={redirect} /> : null}
      <MenuContainer>
        <NewIcon iscurrent={isActiveButton.new.toString()} onClick={() => { setRedirect(`${match.path}/new-job/`); handleActive('new') }} />
        <HomeIcon iscurrent={isActiveButton.home.toString()} onClick={() => { setRedirect(`${match.path}/`); handleActive('home') }} />
        <ProfileIcon iscurrent={isActiveButton.profile.toString()} onClick={() => { setRedirect('/user/'); handleActive('profile') }} />
      </MenuContainer>
    </>
  );
}

export default withRouter(MenuUser);