import React, { useContext } from 'react';

import { UserContext } from '../../../contexts/user-context';

const OverviewUser = () => {
  const { cleaners } = useContext(UserContext);

  return (
    <>
      <h3>User overview</h3>
      {
        cleaners
          ? cleaners.map(cleaner => cleaner.name || cleaner.firstName)
          : null
      }
    </>
  );
}

export default OverviewUser;