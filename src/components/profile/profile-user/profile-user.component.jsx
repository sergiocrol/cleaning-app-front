/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AddressCard from '../../address-card/address-card-user/address-card-user.component';
import SpinnerButton from '../../spinner-button/spinner-button.component';

import { ReactComponent as Down } from '../../../assets/slide/down.svg';
import { ReactComponent as Map } from '../../../assets/modals/map.svg';
import UserImage from '../../../assets/signup-page/user-avatar.svg';

import { uploadProfileImageFirebase } from '../../../helpers/save-image-firebase';

import {
  UserProfileTitle,
  UserProfileContainer,
  UserProfileHeader,
  UserProfileImage,
  UserProfileName,
  UserProfileEmail,
  LogoutButton,
  UserProfileBody,
  AddressEmpty,
  SaveAvatarButton
} from './profile-user.styles';

const UserProfile = ({ setHistory, name, email, addresses, logout, id, edit, picture, update }) => {
  const [isLoading, setLoading] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [deleteAddress, setDeleteAddress] = useState(false);
  const [addressesList, setAddresses] = useState(addresses);

  useEffect(() => {
    const newAddresses = addresses.filter(address => address._id !== deleteAddress);
    setAddresses(newAddresses);
  }, [deleteAddress]);

  const deleteAddressFromList = (addressId) => {
    setDeleteAddress(addressId);
  }

  const getImage = event => {
    const file = event.target.files[0];
    setAvatarImage(file);
  }

  const saveImage = event => {
    event.stopPropagation();
    setLoading(true);
    uploadProfileImageFirebase(avatarImage, id)
      .then(url => {
        edit(url)
          .then(res => {
            update();
            setAvatarImage(null);
            setLoading(false);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          })
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }

  return (
    <UserProfileContainer>
      <UserProfileTitle onClick={() => setHistory(true)}><span>&#10092;</span>Edit my profile</UserProfileTitle>
      <UserProfileHeader>
        <input
          id="file-input"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none' }}
          onChange={(event) => getImage(event)} />
        <UserProfileImage
          picture={avatarImage ? URL.createObjectURL(avatarImage) : picture ? picture : UserImage}
          onClick={() => window.document.getElementById('file-input').click()}>
          <SaveAvatarButton avatarImage={avatarImage} onClick={(event) => saveImage(event)}>
            {
              isLoading
                ? <SpinnerButton dotColor='black' />
                : 'save'
            }
          </SaveAvatarButton>
        </UserProfileImage>
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