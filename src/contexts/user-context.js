/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import userService from '../services/user-service';

import { JOB, WITH_ADDRESS, FIRST_TIME, PENDING } from '../constants/index';

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
  const [userState, setUserState] = useState(null);

  const { user: { _id }, user } = useContext(AuthContext);
  const { showLoading, hideLoading, showCleanersLoading, hideCleanersLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (user.jobs && user.jobs.length) {
      setUserState(JOB);
      getPendingJobs(_id);
    } else if (user.addresses && user.addresses.length) {
      setUserState(WITH_ADDRESS);
      setCurrentAddress(user.addresses[0]);
    } else {
      setUserState(FIRST_TIME);
      defineCityGeo();
    }
    setFirstVisit(false);
  }, [user]);

  useEffect(() => {
    if (currentJob.address) {
      setUserState(JOB);
      defineCityJobs();
    } else if (user.addresses && user.addresses.length) {
      if (!currentAddress.city) setCurrentAddress(user.addresses[0]);
      setUserState(WITH_ADDRESS);
      defineCityAddress();
    }
  }, [currentJob, currentAddress])

  const defineCityJobs = () => {
    if (currentJob.address) {
      const { address: { city } } = currentJob;
      getCleanersByCity(city);
    }
  }

  const defineCityAddress = () => {
    if (currentAddress.city) {
      getCleanersByCity(currentAddress.city);
    }
  }

  const defineCityGeo = () => {
    // TODO - get city by geolocation or generic one (Barcelona)
    const city = 'Barcelona';
    getCleanersByCity(city);
  }

  const getPendingJobs = async (_id) => {
    try {
      isFirstVisit && showLoading();
      const jobList = await userService.jobs();
      const confirmedJobs = jobList.filter(job => job.status === PENDING);
      setUserJobs(confirmedJobs);
      // if (!sessionStorage.currentJob) {
      setCurrentJob(confirmedJobs[0] || {});
      // } 
      isFirstVisit && hideLoading();
    } catch (error) {
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

  const confirmRequest = (jobId, requestId) => {
    return userService.confirmRequest(jobId, requestId)
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

  const editAddress = (addressId, address) => {
    return userService.editAddress(addressId, address)
      .then(request => {
        return request;
      })
  }

  const deleteAddress = (addressId) => {
    return userService.deleteAddress(addressId)
      .then(request => {
        return request;
      })
  }

  const editUser = (image) => {
    return userService.editUser(image)
      .then(request => {
        return request;
      })
  }

  return (
    <UserContext.Provider value={
      {
        userState,
        cleaners,
        userJobs,
        currentJob,
        changeCurrentJob,
        createJob,
        getCleaner,
        getAllJobs,
        cancelRequest,
        sendRequest,
        confirmRequest,
        createAddress,
        editAddress,
        deleteAddress,
        changeCurrentAddress,
        editUser,
        currentAddress
      }
    }>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;