import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Rate from '../../rate/rate.component';
import JobCardCleaner from '../../job-card/job-card-cleaner/job-card-cleaner.component';
import HistoryFilter from '../history-filter/history-filter.component';
import ModalJobRequest from '../../modal/modal-job-request.component';
import Modal from '../../modal/modal.component';

import useModal from '../../../hooks/modal';

import { AuthContext } from '../../../contexts/auth-context';

import GearIcon from '../../../assets/profile/gear.png';
import Empty from '../../../assets/modals/empty.png';

import {
  ProfileUserJobs,
  ProfileUserHeader,
  ProfileUserImage,
  ProfileUserInfo,
  ProfileUserButtonContainer,
  JobEmpty
} from '../user-history/user-history.styles';
import { JobCardContainer } from '../../overview/overview-cleaner/overview-cleaner.styles';

const CleanerHistory = ({ setHistory }) => {
  const [status, setStatus] = useState({ all: true, pending: false, confirmed: false, finished: false });
  const [selectedJob, setSelectedJob] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(null);

  const { user: { confirmedJobs, pendingJobs, firstName, lastName, rate, picture, isCleaner } } = useContext(AuthContext);

  const { isShowing, toggle } = useModal();

  const jobs = [...confirmedJobs, ...pendingJobs];

  const handleChange = event => {
    const name = event.currentTarget.attributes.name.value;
    setStatus({ pending: false, confirmed: false, finished: false, [name]: true })
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
    <div>
      <Modal isShowing={isShowing} hide={hideModal}>
        {
          showConfirmationModal
            ? showConfirmationModal
            : <ModalJobRequest job={selectedJob} showConfirmationModal={setShowConfirmationModal} />
        }
      </Modal>
      <ProfileUserHeader>
        <ProfileUserImage
          picture={picture}
          isCleaner={isCleaner}
        />
        <ProfileUserInfo>
          <span>{firstName} {lastName}</span>
          {
            rate ? <Rate rate={rate} /> : null
          }
          <ProfileUserButtonContainer onClick={() => setHistory(false)}>
            <img src={GearIcon} alt='profile' /> <span>edit profile</span>
          </ProfileUserButtonContainer>
        </ProfileUserInfo>
      </ProfileUserHeader>
      <HistoryFilter jobs={jobs} handleChange={handleChange} status={status} />
      <ProfileUserJobs>
        {
          jobs && jobs.length
            ? jobs.map(job => status[job.status] || status.all
              ? <JobCardContainer key={job._id} onClick={() => showJobModal(job)}>
                <JobCardCleaner job={job} showStatus />
              </JobCardContainer>
              : null)
            : <JobEmpty>
              <img src={Empty} alt='empty jobs' />
              <h3>You don't have jobs yet</h3>
              <span>Let's create a new service and find cleaners!</span>
              <Link to='/user/new-job'>new job</Link>
            </JobEmpty>
        }
      </ProfileUserJobs>
    </div>
  );
}

export default CleanerHistory;