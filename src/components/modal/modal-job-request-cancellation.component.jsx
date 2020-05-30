import React from 'react';
import { Link } from 'react-router-dom';

import Cancel from '../../assets/modals/cancel.png';

import { ModalJobConfirmation } from './modal-confirm-job.styles';

const ModalRequestCancellation = () => {
  return (
    <ModalJobConfirmation>
      <img src={Cancel} alt='canceled' />
      <h3>Ok, done!</h3>
      <span>You request has been canceled</span>
      <span>You can send it again in any moment</span>
      <Link to='/'>understood</Link>
    </ModalJobConfirmation>
  );
}

export default ModalRequestCancellation;