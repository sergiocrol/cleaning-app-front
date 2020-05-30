/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';

import JobCardCleaner from '../../job-card/job-card-cleaner/job-card-cleaner.component';
import CustomSlider from '../../custom-slider/custom-slider.component';
import Modal from '../../modal/modal.component';
import ModalJobRequest from '../../modal/modal-job-request.component';

import { JobsPriceRange } from '../../../helpers/price-range';

import { CleanerContext } from '../../../contexts/cleaner-context';
import { AuthContext } from '../../../contexts/auth-context';

import useModal from '../../../hooks/modal';

import { OverviewUserContainer, OverviewUserTitle } from '../overview-user/overview-user.styles';
import { JobCardContainer, CustomSliderContainer } from './overview-cleaner.styles';

const OverviewCleaner = () => {
  const { jobList } = useContext(CleanerContext);
  const { user: { fee, _id } } = useContext(AuthContext);
  const { isShowing, toggle } = useModal();

  const [showConfirmationModal, setShowConfirmationModal] = useState(null);
  const [min, max] = JobsPriceRange(jobList, fee);
  const [value, setValue] = useState(max);
  const [jobFilteredList, setJobFilteredList] = useState(jobList);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    setValue(max);
  }, [max]);

  useEffect(() => {
    setJobFilteredList(jobList.filter(job => !rejectedRequests(job).length && Math.round(job.duration / 60 * fee) <= value));
  }, [value, jobList]);

  const rejectedRequests = job => {
    return job.requests.filter(req => req.cleaner === _id && req.confirmed === false);
  }

  const onChange = event => {
    setValue(event.target.value * 1);
  }

  const showJobModal = job => {
    toggle(!isShowing);
    setSelectedJob(job);
  }

  const hideModal = () => {
    toggle(!isShowing);
    setShowConfirmationModal(null);
  }

  return (
    <OverviewUserContainer>
      <Modal isShowing={isShowing} hide={hideModal}>
        {
          showConfirmationModal
            ? showConfirmationModal
            : <ModalJobRequest job={selectedJob} showConfirmationModal={setShowConfirmationModal} />
        }
      </Modal>
      <OverviewUserTitle>Jobs near to you</OverviewUserTitle>
      <CustomSliderContainer>
        <CustomSlider type="range" min={min} max={max} value={value} onChange={onChange} name="fee" isTotalPrice={true} />
      </CustomSliderContainer>
      {
        jobFilteredList.map(job =>
          <JobCardContainer key={job._id} onClick={() => showJobModal(job)}>
            <JobCardCleaner job={job} showStatus />
          </JobCardContainer>
        )
      }
    </OverviewUserContainer>
  );
}

export default OverviewCleaner;