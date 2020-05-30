/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import ModalRequestConfirmation from '../components/modal/modal-job-request-confirmation.component';
import ModalRequestCancellation from '../components/modal/modal-job-request-cancellation.component';
import ModalRequestRemove from '../components/modal/modal-job-request-remove.component';
import ModalJobConfirmed from '../components/modal/modal-job-confirmed.component';

import { PENDING, CONFIRMED, CANCELED, CLEANER } from '../constants/index';

import { CleanerContext } from '../contexts/cleaner-context';

const useJobRequest = request => {
  const [requestStatus, setRequestStatus] = useState({});
  const { removeRejectedJob, cancelJob, confirmJob, sendRequest } = useContext(CleanerContext);

  useEffect(() => {
    let req;
    if (!request) {
      req = {
        color: CONFIRMED,
        symbol: '',
        buttonText: 'send request',
        buttonColor: props => props.theme.colors.confirmedJobColor,
        action: (jobId) => sendNewRequest(jobId),
        modal: <ModalRequestConfirmation />
      }
    } else {
      req = request.confirmed === null
        ? request.sender === CLEANER
          ? {
            color: PENDING,
            symbol: '?',
            buttonText: 'cancel request',
            buttonColor: props => props.theme.colors.canceledJobColor,
            action: (jobId, requestId) => cancelRequest(jobId, requestId),
            modal: <ModalRequestCancellation />
          }
          : {
            color: PENDING,
            symbol: '?',
            buttonText: 'accept request',
            buttonColor: props => props.theme.colors.confirmButtonColor,
            action: (jobId, requestId) => confirmJob(jobId, requestId),
            modal: <ModalJobConfirmed />
          }
        : request.confirmed
          ? {
            color: CONFIRMED,
            symbol: '✓',
            buttonText: 'confirmed',
            buttonColor: props => props.theme.colors.confirmedJobColor,
            action: () => { },
            modal: null
          }
          : {
            color: CANCELED,
            symbol: '✕',
            buttonText: 'remove',
            buttonColor: props => props.theme.colors.canceledJobColor,
            action: (jobId) => removeJob(jobId),
            modal: <ModalRequestRemove />
          }
    }
    setRequestStatus(req);
  }, [request]);

  const sendNewRequest = (jobId) => {
    return sendRequest(jobId)
      .then(res => res)
      .catch(error => error)
  }

  const removeJob = (jobId) => {
    return removeRejectedJob(jobId)
      .then(res => res)
      .catch(error => error)
  }

  const cancelRequest = (jobId, requestId) => {
    return cancelJob(jobId, requestId)
      .then(res => res)
      .catch(error => error)
  }

  return {
    requestStatus
  }
};

export default useJobRequest;