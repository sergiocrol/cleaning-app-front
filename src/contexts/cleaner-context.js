/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';

import { AuthContext } from './auth-context';

import cleanerService from '../services/cleaner-service';

import { FIRST_TIME, JOBS, CONFIRMED, WITH_ADDRESS } from '../constants/index';

import { LoadingContext } from './loading-context';

export const CleanerContext = React.createContext();

const CleanerProvider = props => {
  const [cleanerStatus, setCleanerStatus] = useState(FIRST_TIME);
  const [cleanerJobs, setCleanerJobs] = useState([]);
  const [jobList, setJobList] = useState([]);

  const { user } = useContext(AuthContext);
  const { showLoading, hideLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (user.confirmedJobs.length || user.pendingJobs.length) {
      getCleanerJobs();
      setCleanerStatus(JOBS);
    } else {
      // No pending/confirmed jobs: We show info slides -> 1) No address -> FIRST_TIME, 2) Address -> WITH_ADDRESS
      user.address.length ? setCleanerStatus(WITH_ADDRESS) : setCleanerStatus(FIRST_TIME);
    }
    getNearJobs();
  }, [user]);

  const getNearJobs = async () => {
    // TODO - Look for jobs by 1) lat/long of the address 2) geolocation is no address 3) city
    showLoading()
    const location = user.city.name;
    const jobs = await cleanerService.getNearJobs(location);
    setJobList(jobs);
    hideLoading();
  }

  const getCleanerJobs = () => {
    let cleanerJobs = [...user.confirmedJobs, ...user.pendingJobs];
    cleanerJobs.reduce((sortedArray, currentJob) => {
      currentJob.status === CONFIRMED ? sortedArray.unshift(currentJob) : sortedArray.push(currentJob);
      return sortedArray;
    }, []);
    setCleanerJobs(cleanerJobs);
  }

  const removeRejectedJob = jobId => {
    return cleanerService.removeRejectedJob(jobId)
      .then(res => {
        return res;
      });
  }

  const cancelJob = (jobId, requestId) => {
    return cleanerService.cancelJob(jobId, requestId)
      .then(res => {
        return res;
      });
  }

  const sendRequest = jobId => {
    return cleanerService.sendRequest(jobId)
      .then(res => {
        return res;
      });
  }

  const confirmJob = (jobId, requestId) => {
    return cleanerService.confirmJob(jobId, requestId)
      .then(res => {
        return res;
      });
  }

  return (
    <CleanerContext.Provider value={
      {
        cleanerStatus,
        cleanerJobs,
        jobList,
        removeRejectedJob,
        cancelJob,
        confirmJob,
        sendRequest
      }
    }>
      {props.children}
    </CleanerContext.Provider>
  );
}

export default CleanerProvider;