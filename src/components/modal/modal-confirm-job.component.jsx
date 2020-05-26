import React from 'react';
import { Link } from 'react-router-dom';

import Success from '../../assets/modals/success.png';

import { ModalJobConfirmation } from './modal-confirm-job.styles';

const ModalConfirmJob = () => {
  return (
    <ModalJobConfirmation>
      <img src={Success} alt='confirmed' />
      <h3>Congratulations!</h3>
      <span>You have created a job :)</span>
      <span>Remember you can see all the details of your current job in the main page, as well as in your profile</span>
      <Link to='/'>main page</Link>
    </ModalJobConfirmation>
  );
}

export default ModalConfirmJob;