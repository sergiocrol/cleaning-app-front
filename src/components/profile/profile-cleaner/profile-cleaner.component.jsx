import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Rate from '../../rate/rate.component';
import AddressCardCleaner from '../../address-card/address-card-cleaner/address-card-cleaner.component';

import { ReactComponent as Down } from '../../../assets/slide/down.svg';
import { ReactComponent as Map } from '../../../assets/modals/map.svg';

import { AuthContext } from '../../../contexts/auth-context';

import {
  UserProfileTitle,
  UserProfileContainer,
  UserProfileHeader,
  UserProfileImage,
  UserProfileName,
  LogoutButton,
  UserProfileBody,
  AddressEmpty
} from '../profile-user/profile-user.styles';
import { NewAddressCard } from './profile-cleaner.styles';

const CleanerProfile = ({ setHistory }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { user: { firstName, lastName, rate, addresses }, logout } = useContext(AuthContext);

  return (
    <UserProfileContainer>
      <UserProfileTitle onClick={() => setHistory(true)}><span>&#10092;</span>Edit my profile</UserProfileTitle>
      <UserProfileHeader>
        <UserProfileImage />
        <UserProfileName onClick={() => setIsVisible(!isVisible)}>
          {firstName} {lastName}<Down />
          <LogoutButton isVisible={isVisible} onClick={logout}>logout</LogoutButton>
        </UserProfileName>
        {
          rate
            ? <Rate rate={rate} />
            : null
        }
      </UserProfileHeader>
      <UserProfileTitle>Your address</UserProfileTitle>
      <UserProfileBody>
        {
          addresses.length
            ? <>
              {
                addresses.map(address => <AddressCardCleaner key={address._id} address={address} />)
              }
              <Link to='/cleaner/new-address'>
                <NewAddressCard>
                  <span>&#8853;</span>
                  <span>new address</span>
                </NewAddressCard>
              </Link>
            </>
            : <AddressEmpty>
              <Map />
              <h3>You don't have any address yet</h3>
              <span>Let's add an address</span>
              <Link to='/cleaner/new-address'>Add</Link>
            </AddressEmpty>
        }
      </UserProfileBody>
    </UserProfileContainer>
  );
}

export default CleanerProfile;