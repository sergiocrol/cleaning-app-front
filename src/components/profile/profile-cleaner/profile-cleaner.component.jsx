import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Rate from '../../rate/rate.component';
import AddressCardCleaner from '../../address-card/address-card-cleaner/address-card-cleaner.component';
import SpinnerButton from '../../spinner-button/spinner-button.component';

import { ReactComponent as Down } from '../../../assets/slide/down.svg';
import { ReactComponent as Map } from '../../../assets/modals/map.svg';
import CleanerImage from '../../../assets/signup-page/cleaner-avatar.svg';

import { AuthContext } from '../../../contexts/auth-context';
import { CleanerContext } from '../../../contexts/cleaner-context';

import { uploadProfileImageFirebase } from '../../../helpers/save-image-firebase';

import {
  UserProfileTitle,
  UserProfileContainer,
  UserProfileHeader,
  UserProfileImage,
  UserProfileName,
  LogoutButton,
  UserProfileBody,
  AddressEmpty,
  SaveAvatarButton
} from '../profile-user/profile-user.styles';
import { NewAddressCard } from './profile-cleaner.styles';

const CleanerProfile = ({ setHistory }) => {
  const [isLoading, setLoading] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const { user: { firstName, lastName, rate, addresses, picture, _id }, logout, update } = useContext(AuthContext);
  const { editCleaner } = useContext(CleanerContext);

  const getImage = event => {
    const file = event.target.files[0];
    setAvatarImage(file);
  }

  const saveImage = event => {
    event.stopPropagation();
    setLoading(true);
    uploadProfileImageFirebase(avatarImage, _id)
      .then(url => {
        editCleaner(url)
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
          picture={avatarImage ? URL.createObjectURL(avatarImage) : picture ? picture : CleanerImage}
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