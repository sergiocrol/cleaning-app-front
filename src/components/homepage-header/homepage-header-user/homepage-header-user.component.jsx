/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { UserContext } from '../../../contexts/user-context';
import { AuthContext } from '../../../contexts/auth-context';

import CarouselUserComponent from '../../carousel/carousel-user/carousel-user.component';

import { HeaderContainer, HeaderTitle } from './homepage-header-user.styles';

const HomepageHeaderUser = () => {
  const { userJobs, changeCurrentJob, currentJob, changeCurrentAddress, currentAddress } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  let isFirstTime = false;

  if (!userJobs && (user.addresses === undefined || !user.addresses.length)) isFirstTime = true;

  useEffect(() => {
    return () => setRedirect(false);
  }, [redirect]);

  return (
    <HeaderContainer>
      {redirect ? <Redirect to={`/user/new-job`} /> : null}
      <HeaderTitle>{userJobs && userJobs.length
        ? 'Your current jobs'
        : user.addresses && user.addresses.length
          ? 'Your address'
          : 'First steps'}
      </HeaderTitle>
      <CarouselUserComponent
        userJobs={userJobs}
        changeCurrentJob={changeCurrentJob}
        currentJob={currentJob}
        user={user}
        changeCurrentAddress={changeCurrentAddress}
        currentAddress={currentAddress}
        isFirstTime={isFirstTime}
      />
    </HeaderContainer>
  );
}

export default withRouter(HomepageHeaderUser);