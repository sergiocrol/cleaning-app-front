import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import EditIcon from '../../assets/profile/edit.png';
import DeleteIcon from '../../assets/profile/delete.png';
import { ReactComponent as HouseIcon } from '../../assets/new-job/house-icon.svg';
import { ReactComponent as KitchenIcon } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BedroomIcon } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as BathroomIcon } from '../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as KidsIcon } from '../../assets/new-job/baby-icon.svg';
import { ReactComponent as PetsIcon } from '../../assets/new-job/pet-icon.svg';

import SpinnerButton from '../spinner-button/spinner-button.component';

import { UserContext } from '../../contexts/user-context';
import { AuthContext } from '../../contexts/auth-context';

import {
  AddressCardContainer,
  AddressCardHeader,
  AddressCardBody,
  AddressCardHeaderName,
  AddressCardHeaderAddress,
  DeleteMessage
} from './address-card.styles';

const AddressCard = ({ address, deleteAddressFromList }) => {
  const { deleteAddress } = useContext(UserContext);
  const { update } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const { name, city, addressStreet, addressNumber, rooms, pets, kids, _id } = address;
  const addressRooms = {};
  rooms.forEach(({ type, number }) => {
    addressRooms[type] = number;
  });

  const removeSelectedAddress = () => {
    setIsLoading(true);
    deleteAddress(_id)
      .then(res => {
        deleteAddressFromList(_id);
        update();
        sessionStorage.clear();
        setIsLoading(false);
      })
      .catch(res => {
        console.log('something went wrong')
        setIsLoading(false);
      })
  }

  return (
    <AddressCardContainer>
      <AddressCardHeader>
        <AddressCardHeaderName>
          <span><HouseIcon />{name}</span>
          <span>
            <Link to={{ pathname: '/user/new-address', state: { _id } }}><img src={EditIcon} alt='Edit Address' /></Link>
            <img src={DeleteIcon} alt='Delete Address' onClick={() => setDeleteMessage(true)} />
          </span>
        </AddressCardHeaderName>
        <AddressCardHeaderAddress>
          {`${addressStreet}, ${addressNumber}, ${city}`}
        </AddressCardHeaderAddress>
      </AddressCardHeader>
      <AddressCardBody>
        <div><BedroomIcon />{addressRooms.room}</div>
        <div><KitchenIcon />{addressRooms.kitchen}</div>
        <div><LivingroomIcon />{addressRooms.terrace}</div>
        <div><BathroomIcon />{addressRooms.bathroom}</div>
        <div><span><PetsIcon />{pets ? '✓' : '✗'}</span></div>
        <div><span><KidsIcon />{kids ? '✓' : '✗'}</span></div>
      </AddressCardBody>
      <DeleteMessage deleteMessage={deleteMessage}>
        Do you want to delete this address?
        <div>
          <span onClick={() => removeSelectedAddress()}>{isLoading ? <SpinnerButton /> : 'Delete'}</span>
          <span onClick={() => setDeleteMessage(false)}>Cancel</span>
        </div>
      </DeleteMessage>
    </AddressCardContainer>
  );
}

export default AddressCard;