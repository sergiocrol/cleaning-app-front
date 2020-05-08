/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import userService from '../services/user-service';
import { AuthContext } from './auth-context';
import Spinner from '../components/spinner/spinner.component';

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const isCurrentJob = sessionStorage.currentJob ? JSON.parse(sessionStorage.currentJob) : {};
  const [userJobs, setUserJobs] = useState(null);
  const [currentJob, setCurrentJob] = useState(isCurrentJob);
  const [cleaners, setCleaners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCleanerLoading, setIsCleanerLoading] = useState(true);

  const { user: { _id, addresses } } = useContext(AuthContext);

  useEffect(() => {
    /* TODO - 
    > First check if there is any job and get its address 
    > if not check if there is user address 
    > if not check geolocation 
    > if not, random city (Barcelona)
    */
    if (userJobs === null) {
      getConfirmedJobs(_id);
    }
    defineCity();
  }, [currentJob]);

  const defineCity = () => {
    if (currentJob.address) {
      const { address: { city } } = currentJob;
      getCleanersByCity(city);
    } else {
      const city = addresses.length > 0 ? addresses[0].city : 'Barcelona';
      getCleanersByCity(city);
    }
  }

  const getConfirmedJobs = async (_id) => {
    const jobList = await userService.jobs();
    const confirmedJobs = jobList.filter(job => job.status === 'pending');
    setUserJobs(confirmedJobs);
    if (!sessionStorage.currentJob) {
      setCurrentJob(confirmedJobs[0] || {});
    }
  }

  const getCleanersByCity = (city) => {
    setIsCleanerLoading(true);
    return userService.cleanersByCity(city)
      .then(cleaners => {
        setCleaners(cleaners);
        setIsLoading(false);
        setIsCleanerLoading(false);
      })
  }

  const changeCurrentJob = (jobId) => {
    const job = userJobs.filter(job => job._id === jobId);
    sessionStorage.setItem('currentJob', JSON.stringify(job[0]));
    setCurrentJob(job[0]);
    defineCity();
  }

  const createJob = (job) => {
    return userService.createJob(job)
      .then((job) => {
        return job;
      })
  }

  const getCleaner = (cleanerId) => {
    return userService.cleaner(cleanerId)
      .then((cleaner) => {
        return cleaner;
      })
  }

  const cancelRequest = (jobId, requestId) => {
    return userService.cancelRequest(jobId, requestId)
      .then((request) => {
        return request;
      })
  }

  const sendRequest = (jobId, cleanerId) => {
    return userService.sendRequest(jobId, cleanerId)
      .then(request => {
        return request
      })
  }

  return (
    <>
      {isLoading ? <Spinner /> : (
        <UserContext.Provider value={
          {
            cleaners,
            userJobs,
            currentJob,
            isCleanerLoading,
            changeCurrentJob,
            createJob,
            getCleaner,
            cancelRequest,
            sendRequest,
          }
        }>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
}

export default UserProvider;