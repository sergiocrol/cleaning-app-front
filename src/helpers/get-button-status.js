import React from 'react';

import { USER, CLEANER } from '../constants/index';

import {
  ButtonPending,
  ButtonConfirmed,
  ButtonRejected,
  ButtonHire
} from '../components/button-status/button-status.component';

const getButtonStatus = (job, idx) => {
  const status = job.requests[idx].confirmed;
  const sender = job.requests[idx].sender;
  const jobId = job._id;
  const requestId = job.requests[idx]._id;
  let button = null;
  if (status === null && sender === USER) {
    button = <ButtonPending job={jobId} request={requestId} />;
  } else if (status === false && sender === USER) {
    button = <ButtonRejected job={jobId} request={requestId} />;
  } else if (status === true && sender === USER) {
    button = <ButtonConfirmed job={jobId} request={requestId} />;
  } else if (status === null && sender === CLEANER) {
    button = <ButtonHire job={jobId} request={requestId} />;
  } else if (status === false && sender === CLEANER) {
    button = <ButtonRejected job={jobId} request={requestId} />;
  } else {
    button = <ButtonConfirmed job={jobId} request={requestId} />;
  }

  return button;
}

export default getButtonStatus;