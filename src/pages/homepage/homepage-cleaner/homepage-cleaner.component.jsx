import React from 'react';

import HomepageHeaderCleaner from '../../../components/homepage-header/homepage-header-cleaner/homepage-header-cleaner.component';
import OverviewCleaner from '../../../components/overview/overview-cleaner/overview-cleaner.component';

import BackgroundImage from '../../../assets/backgrounds/bg4-alpha.svg';

import { HomepageContainer, ImageBackground } from '../homepage-user/homepage-user.styles';

const HomepageCleaner = () => {
  return (
    <HomepageContainer>
      <ImageBackground src={BackgroundImage} />
      <HomepageHeaderCleaner />
      <OverviewCleaner />
    </HomepageContainer>
  );
}

export default HomepageCleaner;