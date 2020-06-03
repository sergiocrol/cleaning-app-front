/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import JobCardCleaner from '../../../job-card/job-card-cleaner/job-card-cleaner.component';
import SpinnerButton from '../../../spinner-button/spinner-button.component';

import { AuthContext } from '../../../../contexts/auth-context';

import useJobRequest from '../../../../hooks/job-request';

import { SlideJobCleanerContainer, SlideButton } from './slide-job-cleaner.styles';

const SlideJobCleaner = ({ job, selectedJob, elRef }) => {
  const { requests, _id: jobId } = job;
  const [request, setRequest] = useState({});
  const [isLoading, setLoading] = useState(false);

  const { user: { _id }, update } = useContext(AuthContext);

  const { requestStatus } = useJobRequest(request);

  useEffect(() => {
    const request = requests.filter(req => req.cleaner === _id)[0];
    setRequest(request);
  }, []);

  const buttonAction = async () => {
    setLoading(true);
    await requestStatus.action(jobId, request._id);
    await update();
    setLoading(false);
  }

  return (
    <SlideJobCleanerContainer>
      <JobCardCleaner job={job} showStatus />
      {
        elRef.current
          ? ReactDOM.createPortal(
            <SlideButton
              disabled={isLoading}
              width='150'
              height='40'
              buttonColor={requestStatus.buttonColor}
              selectedJob={selectedJob}
              onClick={() => buttonAction()}>
              {isLoading ? <SpinnerButton /> : requestStatus.buttonText}
            </SlideButton>,
            elRef.current)
          : null
      }
    </SlideJobCleanerContainer>
  );
}

export default SlideJobCleaner;