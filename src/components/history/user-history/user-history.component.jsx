/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import { ProfileUserFilter, ProfileUserJobs } from './user-history.styles';
import { ReactComponent as Down } from '../../../assets/slide/down.svg';
import JobCard from '../../../components/job-card/job-card.component';

const UserHistory = ({ jobs }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [status, setStatus] = useState({ pending: true, confirmed: true, finished: true });

  const handleChange = event => {
    const name = event.target.value;
    setStatus({ ...status, [name]: !status[name] });
  }

  return (
    <>
      <ProfileUserFilter showfilter={showFilter.toString()}>
        <span onClick={() => setShowFilter(!showFilter)}>All your jobs</span> <Down width='20px' height='20px' style={{ marginLeft: '5px', stroke: '#4672ed' }} />
        <div>
          <label>
            <span>pending jobs</span>
            <input type='checkbox' id='pending' value="pending" defaultChecked onChange={handleChange} />
            <div></div>
          </label>
          <label>
            <span>confirmed jobs</span>
            <input type='checkbox' id='confirmed' value="confirmed" defaultChecked onChange={handleChange} />
            <div></div>
          </label>
          <label>
            <span>finished jobs</span>
            <input type='checkbox' id='finished' value="finished" defaultChecked onChange={handleChange} />
            <div></div>
          </label>
        </div>
      </ProfileUserFilter>
      <ProfileUserJobs>
        {
          jobs
            ? jobs.map(job => status[job.status] ? <JobCard key={job._id} job={job} /> : null)
            : null
        }
      </ProfileUserJobs>
    </>
  );
}

export default UserHistory;