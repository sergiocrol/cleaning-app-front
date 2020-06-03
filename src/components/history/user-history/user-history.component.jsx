/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import JobCardUser from '../../job-card/job-card-user/job-card-user.component';
import HistoryFilter from '../history-filter/history-filter.component';

import Empty from '../../../assets/modals/empty.png';

import {
  ProfileUserJobs,
  ProfileUserHeader,
  ProfileUserImage,
  ProfileUserInfo,
  ProfileUserButtonContainer,
  JobEmpty
} from './user-history.styles';

import GearIcon from '../../../assets/profile/gear.png';


const UserHistory = ({ jobs, name, email, setHistory }) => {
  const [status, setStatus] = useState({ all: true, pending: false, confirmed: false, finished: false });

  const handleChange = event => {
    const name = event.currentTarget.attributes.name.value;
    setStatus({ pending: false, confirmed: false, finished: false, [name]: true })
  }

  return (
    <>
      <ProfileUserHeader>
        <ProfileUserImage />
        <ProfileUserInfo>
          <span>{name || email}</span>
          <ProfileUserButtonContainer onClick={() => setHistory(false)}>
            <img src={GearIcon} alt='profile' /> <span>edit profile</span>
          </ProfileUserButtonContainer>
        </ProfileUserInfo>
      </ProfileUserHeader>
      <HistoryFilter jobs={jobs} handleChange={handleChange} status={status} />
      <ProfileUserJobs>
        {
          jobs && jobs.length
            ? jobs.map(job => status[job.status] || status.all
              ? <JobCardUser key={job._id} job={job} />
              : null)
            : <JobEmpty>
              <img src={Empty} alt='empty jobs' />
              <h3>You don't have jobs yet</h3>
              <span>Let's create a new service and find cleaners!</span>
              <Link to='/user/new-job'>new job</Link>
            </JobEmpty>
        }
      </ProfileUserJobs>
    </>
  );
}

export default UserHistory;