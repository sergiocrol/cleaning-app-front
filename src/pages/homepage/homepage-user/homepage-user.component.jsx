import React from 'react';

import OverviewUser from '../../../components/overview/overview-user/overview-user.component';
import HomepageHeaderUser from '../../../components/homepage-header/homepage-header-user/homepage-header-user.component';

import BackgroundImage from '../../../assets/backgrounds/bg2-alpha.svg';

import { HomepageContainer, ImageBackground } from './homepage-user.styles';

const HomepageUser = () => {
  return (
    <HomepageContainer>
      <ImageBackground src={BackgroundImage} />
      <HomepageHeaderUser />
      <OverviewUser />
    </HomepageContainer>
  );
}

export default HomepageUser;