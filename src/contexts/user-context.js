/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import userService from '../services/user-service';

import { AuthContext } from './auth-context';
import { LoadingContext } from './loading-context';

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const isCurrentJob = sessionStorage.currentJob ? JSON.parse(sessionStorage.currentJob) : {};
  const isCurrentAddress = sessionStorage.currentAddress ? JSON.parse(sessionStorage.currentAddress) : {};
  const [userJobs, setUserJobs] = useState(null);
  const [currentJob, setCurrentJob] = useState(isCurrentJob);
  const [cleaners, setCleaners] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(isCurrentAddress);
  const [isFirstVisit, setFirstVisit] = useState(true);

  const { user: { _id }, user } = useContext(AuthContext);
  const { showLoading, hideLoading, showCleanersLoading, hideCleanersLoading } = useContext(LoadingContext);

  useEffect(() => {
    /* TODO - 
    > First check if there is any job and get its address 
    > if not check if there is user address 
    > if not check geolocation 
    > if not, random city (Barcelona)
    */
    if (user.jobs && user.jobs.length) {
      getPendingJobs(_id);
    } else if (user.addresses && user.addresses.length) {
      setCurrentAddress(user.addresses[0]);
    } else {
      defineCityGeo();
    }
    setFirstVisit(false);
  }, [user]);

  useEffect(() => {
    if (user.jobs && user.jobs.length) {
      defineCityJobs();
    } else if (user.addresses && user.addresses.length) {
      defineCityAddress();
    }
  }, [currentJob, currentAddress])

  const defineCityJobs = () => {
    if (currentJob.address) {
      const { address: { city } } = currentJob;
      getCleanersByCity(city);
    }
    // else {
    //   const city = addresses && addresses.length > 0 ? addresses[0].city : 'Barcelona';
    //   getCleanersByCity(city);
    // }
  }

  const defineCityAddress = () => {
    if (currentAddress.city) {
      getCleanersByCity(currentAddress.city);
    }
  }

  const defineCityGeo = () => {
    // get city by geolocation or generic one (Barcelona)
    const city = 'Barcelona';
    getCleanersByCity(city);
  }

  const getPendingJobs = async (_id) => {
    try {
      isFirstVisit && showLoading();
      const jobList = await userService.jobs();
      const confirmedJobs = jobList.filter(job => job.status === 'pending');
      setUserJobs(confirmedJobs);
      if (!sessionStorage.currentJob) {
        setCurrentJob(confirmedJobs[0] || {});
      }
      isFirstVisit && hideLoading();
    } catch (error) {
      // Show error screen
      console.log(error);
      isFirstVisit && hideLoading();
    }
  }

  const getAllJobs = async () => {
    try {
      showLoading();
      const jobList = await userService.jobs();
      hideLoading();
      return jobList;
    } catch (error) {
      console.log(error)
      hideLoading();
    }
  }

  const getCleanersByCity = (city) => {
    isFirstVisit ? showLoading() : showCleanersLoading();
    return userService.cleanersByCity(city)
      .then(cleaners => {
        setCleaners(cleaners);
        isFirstVisit ? hideLoading() : hideCleanersLoading();
      })
      .catch(error => {
        // show error screen
        console.log(error)
      })
  }

  const changeCurrentJob = (jobId) => {
    const job = userJobs.filter(job => job._id === jobId);
    sessionStorage.setItem('currentJob', JSON.stringify(job[0]));
    setCurrentJob(job[0]);
  }

  const changeCurrentAddress = (addressId) => {
    const address = user.addresses.filter(address => address._id === addressId);
    sessionStorage.setItem('currentAddress', JSON.stringify(address[0]));
    setCurrentAddress(address[0]);
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
        return request;
      })
  }

  const createAddress = (address) => {
    return userService.createAddress(address)
      .then(request => {
        return request;
      })
  }

  return (
    <UserContext.Provider value={
      {
        cleaners,
        userJobs,
        currentJob,
        changeCurrentJob,
        createJob,
        getCleaner,
        getAllJobs,
        cancelRequest,
        sendRequest,
        createAddress,
        changeCurrentAddress,
        currentAddress
      }
    }>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;