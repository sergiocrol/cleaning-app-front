import React, { useContext } from 'react';

import CarouselCleanerComponent from '../../carousel/carousel-cleaner/carousel-cleaner.component';

import { FIRST_TIME } from '../../../constants/index';

import { CleanerContext } from '../../../contexts/cleaner-context';

import { HeaderContainer, HeaderTitle } from '../homepage-header-user/homepage-header-user.styles';

const HomepageHeaderCleaner = () => {
  const { cleanerStatus } = useContext(CleanerContext);

  return (
    <HeaderContainer>
      <HeaderTitle>{cleanerStatus === FIRST_TIME ? 'First steps' : 'Your jobs'}</HeaderTitle>
      <CarouselCleanerComponent />
    </HeaderContainer>
  );
}

export default HomepageHeaderCleaner;