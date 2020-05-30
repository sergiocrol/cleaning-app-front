import React from 'react';
import { Link } from 'react-router-dom';

import Success from '../../assets/modals/success.png';

import { ModalJobConfirmation } from './modal-confirm-job.styles';

const ModalJobConfirmed = () => {
  return (
    <ModalJobConfirmation>
      <img src={Success} alt='confirmed' />
      <h3>Congratulations!</h3>
      <span>You have confirmed a job! :)</span>
      <span>You can check the status in your profile and main page</span>
      <Link to='/'>close</Link>
    </ModalJobConfirmation>
  );
}

export default ModalJobConfirmed;