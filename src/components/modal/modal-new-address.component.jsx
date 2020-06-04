import React from 'react';
import { Link } from 'react-router-dom';

import Success from '../../assets/modals/success.png';

import { ModalAddress } from './modal-new-address.styles';

const ModalNewAddress = ({ isEdit }) => {
  return (
    <ModalAddress>
      <img src={Success} alt='Success' />
      <h3>Great!</h3>
      <span>You have {isEdit ? 'edited the ' : 'added a new '} address</span>
      <span>Remember you can manage your addresses from your profile</span>
      <Link to='/user/profile'>profile</Link>
    </ModalAddress>
  )
}

export default ModalNewAddress;