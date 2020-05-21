/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../contexts/auth-context';

import {
  ProfileUserJobs,
  UserHistoryFilter,
  HistoryButton,
  ProfileUserHeader,
  ProfileUserImage,
  ProfileUserInfo,
  ProfileUserButtonContainer
} from './user-history.styles';

import GearIcon from '../../../assets/profile/gear.png';

import JobCard from '../../../components/job-card/job-card.component';

const UserHistory = ({ jobs, name, email, setHistory }) => {
  const [status, setStatus] = useState({ all: true, pending: false, confirmed: false, finished: false });
  const { user } = useContext(AuthContext);

  const handleChange = event => {
    const name = event.currentTarget.attributes.name.value;
    setStatus({ pending: false, confirmed: false, finished: false, [name]: true })
  }

  useEffect(() => {

  }, [user])

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
      <UserHistoryFilter>
        <HistoryButton name='all' onClick={handleChange} isActived={status.all}>
          <span>{jobs ? jobs.length : 0}</span><span>jobs</span>
        </HistoryButton>
        <HistoryButton name='pending' onClick={handleChange} isActived={status.pending}>
          <span>{jobs ? jobs.filter(job => job.status === 'pending').length : 0}</span><span>pending</span>
        </HistoryButton>
        <HistoryButton name='confirmed' onClick={handleChange} isActived={status.confirmed}>
          <span>{jobs ? jobs.filter(job => job.status === 'confirmed').length : 0}</span><span>confirmed</span>
        </HistoryButton>
        <HistoryButton name='finished' onClick={handleChange} isActived={status.finished}>
          <span>{jobs ? jobs.filter(job => job.status === 'finished').length : 0}</span><span>finished</span>
        </HistoryButton>
      </UserHistoryFilter>
      <ProfileUserJobs>
        {
          jobs
            ? jobs.map(job => status[job.status] || status.all ? <JobCard key={job._id} job={job} /> : null)
            : null
        }
      </ProfileUserJobs>
    </>
  );
}

export default UserHistory;