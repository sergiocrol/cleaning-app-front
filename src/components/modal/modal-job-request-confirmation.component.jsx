import React from 'react';
import { Link } from 'react-router-dom';

import Success from '../../assets/modals/success.png';

import { ModalJobConfirmation } from './modal-confirm-job.styles';

const ModalRequestConfirmation = () => {
  return (
    <ModalJobConfirmation>
      <img src={Success} alt='confirmed' />
      <h3>Great!</h3>
      <span>You have sent the request :)</span>
      <span>You can check the status in your profile and main page</span>
      <Link to='/'>close</Link>
    </ModalJobConfirmation>
  );
}

export default ModalRequestConfirmation;