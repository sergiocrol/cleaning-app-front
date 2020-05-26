import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import SpinnerButton from '../../components/spinner-button/spinner-button.component';

import { UserContext } from '../../contexts/user-context';
import { AuthContext } from '../../contexts/auth-context';

import { ButtonStatus } from './button-status.styles';

// Pending button of user history
export const ButtonPending = () => {
  return (
    <ButtonStatus status={'pending'}>
      Waiting
    </ButtonStatus>
  );
}

// Confirmed button of user history
export const ButtonConfirmed = () => {
  return (
    <ButtonStatus status={'confirmed'}>
      Confirmed
    </ButtonStatus>
  );
}

// Rejected button of user history
export const ButtonRejected = () => {
  return (
    <ButtonStatus status={'rejected'}>
      Rejected
    </ButtonStatus>
  );
}

// Hire button for user history and request modal of homepage
export const ButtonHire = ({ job, request, message, confirmation }) => {
  const [loading, setLoading] = useState(false);
  const { confirmRequest } = useContext(UserContext);
  const { update } = useContext(AuthContext);

  const hireCleaner = () => {
    setLoading(true);
    confirmRequest(job, request)
      .then(res => {
        update();
        setLoading(false);
        confirmation && confirmation(true);
      })
      .catch(error => {
        console.log('Something went wrong', error);
        setLoading(false);
      })
  }

  return (
    <ButtonStatus status={message ? 'confirmed' : 'hire'} onClick={hireCleaner}>
      {loading ? <SpinnerButton /> : message ? message : 'Hire'}
    </ButtonStatus>
  );
}

// Button Send request, for requests of homepage
export const ButtonSendRequest = ({ jobId, cleanerId, confirmation }) => {
  const [loading, setLoading] = useState(false);
  const { sendRequest } = useContext(UserContext);
  const { update } = useContext(AuthContext);

  const newRequest = () => {
    setLoading(true);
    sendRequest(jobId, cleanerId)
      .then(request => {
        console.log('Request sent');
        update();
        setLoading(false);
        confirmation && confirmation(true);
      })
      .catch(error => {
        setLoading(false);
        console.log('Not able to send the request')
      })
  }

  return (
    <ButtonStatus status={'hire'} onClick={newRequest}>
      {loading ? <SpinnerButton /> : 'Send'}
    </ButtonStatus>
  );
}

// Reject button for the request modal of homepage
export const ButtonReject = ({ job, request, message, confirmation }) => {
  const [loading, setLoading] = useState(false);
  const { cancelRequest } = useContext(UserContext);
  const { update } = useContext(AuthContext);

  const removeRequest = () => {
    setLoading(true);
    cancelRequest(job, request)
      .then(request => {
        console.log('Request sent');
        update();
        setLoading(false);
        confirmation && confirmation(true);
      })
      .catch(error => {
        console.log('Not able to cancel the request');
        setLoading(false);
      })
  }

  return (
    <ButtonStatus status={'rejected'} onClick={removeRequest}>
      {loading ? <SpinnerButton /> : message ? message : 'Reject'}
    </ButtonStatus>
  );
}