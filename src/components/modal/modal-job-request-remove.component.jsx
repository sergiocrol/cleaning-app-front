import React from 'react';
import { Link } from 'react-router-dom';

import Cancel from '../../assets/modals/cancel.png';

import { ModalJobConfirmation } from './modal-confirm-job.styles';

const ModalRequestRemove = () => {
  return (
    <ModalJobConfirmation>
      <img src={Cancel} alt='removed' />
      <h3>Job removed!</h3>
      <span>You request has been rejected, but don't worry, there are many other opportunities!</span>
      <Link to='/'>keep looking</Link>
    </ModalJobConfirmation>
  );
}

export default ModalRequestRemove;