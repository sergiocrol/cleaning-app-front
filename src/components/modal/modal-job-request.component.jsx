/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import JobCardCleaner from '../job-card/job-card-cleaner/job-card-cleaner.component';
import SpinnerButton from '../spinner-button/spinner-button.component';

import { AuthContext } from '../../contexts/auth-context';

import useJobRequest from '../../hooks/job-request';

import { ReactComponent as UserImage } from '../../assets/signup-page/user-avatar.svg';

import { JobCardMap, UserInfo } from './modal-job-request.styles';
import { SlideButton } from '../carousel/carousel-cleaner/slide/slide-job-cleaner.styles';

const ModalJobRequest = ({ job, showConfirmationModal }) => {
  const { requests, _id: jobId, address: { mapImage }, user: { firstName, lastName } } = job;
  const [request, setRequest] = useState({});
  const [isLoading, setLoading] = useState(false);

  const { user: { _id }, update } = useContext(AuthContext);

  const { requestStatus } = useJobRequest(request);

  useEffect(() => {
    const request = requests.filter(req => req.cleaner === _id)[0];
    setRequest(request);
  }, []);

  const buttonAction = async () => {
    const requestId = request ? request._id : null;
    setLoading(true);
    await requestStatus.action(jobId, requestId);
    await update();
    setLoading(false);
    showConfirmationModal(requestStatus.modal);
  }

  return (
    <div>
      <UserInfo>
        <UserImage />
        <span>{firstName} {lastName}</span>
      </UserInfo>
      <JobCardCleaner job={job} />
      <JobCardMap mapImage={mapImage} />

      <SlideButton
        width='150'
        height='40'
        buttonColor={requestStatus.buttonColor}
        selectedJob={true}
        onClick={() => buttonAction()}
      >
        {isLoading ? <SpinnerButton /> : requestStatus.buttonText}
      </SlideButton>
    </div>
  );
}

export default ModalJobRequest;