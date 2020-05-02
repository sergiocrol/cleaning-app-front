import React, { useContext, useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { UserContext } from '../../../contexts/user-context';
import CustomButton from '../../custom-button/custom-button.component';

const HomepageHeaderUser = ({ match }) => {
  const { userJobs, changeCurrentJob } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const { path } = match;

  useEffect(() => {
    return () => setRedirect(false);
  }, [redirect]);


  return (
    <div>
      {redirect ? <Redirect to={`${path}/new-job`} /> : null}
      <h3>User header</h3>
      {
        userJobs ?
          userJobs.map(job => {
            return (
              <button key={job._id} onClick={() => changeCurrentJob(job._id)}>{job.address.city}</button>
            )
          })
          : null
      }
      <CustomButton onClick={() => setRedirect(true)}>New job</CustomButton>
    </div>
  );
}

export default withRouter(HomepageHeaderUser);