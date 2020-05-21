/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import AddressCard from '../../address-card/address-card.component';

import { ReactComponent as Down } from '../../../assets/slide/down.svg';

import {
  UserProfileTitle,
  UserProfileContainer,
  UserProfileHeader,
  UserProfileImage,
  UserProfileName,
  UserProfileEmail,
  LogoutButton,
  UserProfileBody
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
          addressesList.map(address => <AddressCard key={address._id} address={address} deleteAddressFromList={deleteAddressFromList} />)
        }
      </UserProfileBody>
    </UserProfileContainer>
  );
}

export default UserProfile;