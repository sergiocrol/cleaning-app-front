import React, { useContext, useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { UserContext } from '../../../contexts/user-context';
import CarouselComponent from '../../carousel/carousel.component';

import { HeaderContainer, HeaderTitle } from './homepage-header-user.styles';

const HomepageHeaderUser = () => {
  const { userJobs, changeCurrentJob, currentJob } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    return () => setRedirect(false);
  }, [redirect]);

  return (
    <HeaderContainer>
      {redirect ? <Redirect to={`/user/new-job`} /> : null}
      <HeaderTitle>{userJobs && userJobs.length ? 'Your current jobs' : 'To start'}</HeaderTitle>
      <CarouselComponent userJobs={userJobs} changeCurrentJob={changeCurrentJob} currentJob={currentJob} />
    </HeaderContainer>
  );
}

export default withRouter(HomepageHeaderUser);