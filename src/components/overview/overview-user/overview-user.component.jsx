import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import CleanerCard from '../../cleaner-card/cleaner-card.component';
import { UserContext } from '../../../contexts/user-context';

import { OverviewUserContainer, OverviewUserTitle } from './overview-user.styles';

const OverviewUser = () => {
  const [redirect, setRedirect] = useState('');
  const { cleaners, currentJob: { duration } } = useContext(UserContext);

  const redirectCleanerPage = (cleanerId) => {
    setRedirect(`/user/cleaner/${cleanerId}/`)
  }

  return (
    <OverviewUserContainer>
      {redirect ? <Redirect to={redirect} /> : null}
      <OverviewUserTitle>Cleaners near to you</OverviewUserTitle>
      {
        cleaners && cleaners.length
          ? cleaners.map(cleaner => <CleanerCard key={cleaner._id} cleaner={cleaner} jobDuration={duration} redirect={redirectCleanerPage} />)
          : <h2>nop</h2>
      }
    </OverviewUserContainer>
  );
}

export default OverviewUser;