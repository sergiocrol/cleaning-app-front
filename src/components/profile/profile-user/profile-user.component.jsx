/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AddressCard from '../../address-card/address-card.component';

import { ReactComponent as Down } from '../../../assets/slide/down.svg';
import { ReactComponent as Map } from '../../../assets/modals/map.svg';

import {
  UserProfileTitle,
  UserProfileContainer,
  UserProfileHeader,
  UserProfileImage,
  UserProfileName,
  UserProfileEmail,
  LogoutButton,
  UserProfileBody,
  AddressEmpty
} from './profile-user.styles';

const UserProfile = ({ setHistory, name, email, addresses, logout }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(false);
  const [addressesList, setAddresses] = useState(addresses);

  const deleteAddressFromList = (addressId) => {
    setDeleteAddress(addressId);
  }

  useEffect(() => {
    const newAddresses = addresses.filter(address => address._id !== deleteAddress);
    setAddresses(newAddresses);
  }, [deleteAddress]);

  return (
    <UserProfileContainer>
      <UserProfileTitle onClick={() => setHistory(true)}><span>&#10092;</span>Edit my profile</UserProfileTitle>
      <UserProfileHeader>
        <UserProfileImage />
        <UserProfileName onClick={() => setIsVisible(!isVisible)}>
          {name || email}<Down />
          <LogoutButton isVisible={isVisible} onClick={logout}>logout</LogoutButton>
        </UserProfileName>
        <UserProfileEmail>{email}</UserProfileEmail>
      </UserProfileHeader>
      <UserProfileBody>
        {
          addressesList && addressesList.length
            ? addressesList.map(address => <AddressCard key={address._id} address={address} deleteAddressFromList={deleteAddressFromList} />)
            : <AddressEmpty>
              <Map />
              <h3>You don't have any address yet</h3>
              <span>Let's add an address</span>
              <Link to='/user/new-address'>Add</Link>
            </AddressEmpty>
        }
      </UserProfileBody>
    </UserProfileContainer>
  );
}

export default UserProfile;