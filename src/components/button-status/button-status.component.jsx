import React, { useContext, useState } from 'react';

import SpinnerButton from '../../components/spinner-button/spinner-button.component';

import { UserContext } from '../../contexts/user-context';
import { AuthContext } from '../../contexts/auth-context';

import { ButtonStatus } from './button-status.styles';

export const ButtonPending = ({ job, request }) => {
  return (
    <ButtonStatus status={'pending'}>
      Waiting
    </ButtonStatus>
  );
}

export const ButtonConfirmed = () => {
  return (
    <ButtonStatus status={'confirmed'}>Confirmed</ButtonStatus>
  );
}

export const ButtonRejected = () => {
  return (
    <ButtonStatus status={'rejected'}>Rejected</ButtonStatus>
  );
}

export const ButtonHire = ({ job, request, message }) => {
  const [loading, setLoading] = useState(false);
  const { confirmRequest } = useContext(UserContext);
  const { update } = useContext(AuthContext);

  const hireCleaner = () => {
    confirmRequest(job, request)
      .then(res => {
        setLoading(true);
        update();
        setLoading(false);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <ButtonStatus status={message ? 'confirmed' : 'hire'} onClick={hireCleaner}>
      {loading ? <SpinnerButton /> : message ? message : 'Hire'}
    </ButtonStatus>
  );
}

export const ButtonConfirm = ({ jobId, cleanerId }) => {
  const [loading, setLoading] = useState(false);
  const { sendRequest } = useContext(UserContext);

  const newRequest = () => {
    console.log('Request sent');
    sendRequest(jobId, cleanerId)
      .then(request => {
        setLoading(true);
        console.log('Request sent');
        setLoading(false);
      })
      .catch(error => {
        console.log('Not able to send the request')
      })
  }

  return (
    <ButtonStatus status={'confirmed'} onClick={newRequest}>
      {loading ? <SpinnerButton /> : 'Accept'}
    </ButtonStatus>
  );
}

export const ButtonReject = ({ job, request, message }) => {
  const [loading, setLoading] = useState(false);
  const { cancelRequest } = useContext(UserContext);
  const { update } = useContext(AuthContext);

  const removeRequest = () => {
    cancelRequest(job, request)
      .then(request => {
        setLoading(true);
        console.log('Request sent');
        update();
        setLoading(false);
      })
      .catch(error => {
        console.log('Not able to cancel the request');
      })
  }

  return (
    <ButtonStatus status={'rejected'} onClick={removeRequest}>
      {loading ? <SpinnerButton /> : message ? message : 'Reject'}
    </ButtonStatus>
  );
}