/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import userService from '../services/user-service';
import { AuthContext } from './auth-context';

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [userJobs, setUserJobs] = useState(null);
  const [currentJob, setCurrentJob] = useState({});
  const [cleaners, setCleaners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user: { _id, addresses } } = useContext(AuthContext);

  useEffect(() => {
    /* TODO - 
    > First check if there is any job and get its address 
    > if not check if there is user address 
    > if not check geolocation 
    > if not, random city (Barcelona)
    */
    if (!userJobs) {
      getConfirmedJobs(_id);
    }

    if (currentJob.address) {
      const { address: { city } } = currentJob;
      getCleanersByCity(city);
    } else {
      const city = addresses.length > 0 ? addresses[0].city : 'Barcelona';
      getCleanersByCity(city);
    }
  }, [currentJob]);


  const getConfirmedJobs = async (_id) => {
    const jobList = await userService.jobs(_id);
    const confirmedJobs = jobList.filter(job => job.status === 'pending');
    setUserJobs(confirmedJobs);
    setCurrentJob(confirmedJobs[0] || []);
  }

  const getCleanersByCity = (city) => {
    return userService.cleanersByCity(city)
      .then(cleaners => {
        setCleaners(cleaners);
        setIsLoading(false);
      })
  }

  const changeCurrentJob = (jobId) => {
    const job = userJobs.filter(job => job._id === jobId);
    setCurrentJob(job[0]);
  }

  const createJob = (job) => {
    return userService.createJob(job)
      .then((job) => {
        return job;
      })
  }

  return (
    <>
      {isLoading ? <p></p> : (
        <UserContext.Provider value={
          {
            cleaners,
            userJobs,
            currentJob,
            changeCurrentJob,
            createJob
          }
        }>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
}

export default UserProvider;