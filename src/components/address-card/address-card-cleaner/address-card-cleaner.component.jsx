import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HouseIcon } from '../../../assets/new-job/house-icon.svg'
import EditIcon from '../../../assets/profile/edit.png';
import DeleteIcon from '../../../assets/profile/delete.png';

import SpinnerButton from '../../spinner-button/spinner-button.component';

import { CleanerContext } from '../../../contexts/cleaner-context';
import { AuthContext } from '../../../contexts/auth-context';

import { AddressCardContainer, AddressCardHeader, AddressCardBody, AddressDeleteCard } from './address-card-cleaner.styles';

const AddressCardCleaner = ({ address, address: { name, addressStreet, addressNumber, city, _id } }) => {
  const [deleteSelected, setDeleteSelected] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { deleteAddress } = useContext(CleanerContext);
  const { update } = useContext(AuthContext);

  const deleteSelectedAddress = () => {
    setLoading(true);
    deleteAddress(_id)
      .then(res => {
        update();
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }

  return (
    <AddressCardContainer>
      {
        deleteSelected
          ? <AddressDeleteCard>
            <span>Do you want to delete this address?</span>
            <div>
              <span onClick={() => deleteSelectedAddress()}>{isLoading ? <SpinnerButton /> : 'delete'}</span>
              <span onClick={() => setDeleteSelected(!deleteSelected)}>cancel</span>
            </div>
          </AddressDeleteCard>
          : <>
            <AddressCardHeader>
              <span><HouseIcon />{name}</span>
              <span>{`${addressStreet}, ${addressNumber}, ${city}`}</span>
            </AddressCardHeader>
            <AddressCardBody>
              <Link to={{ pathname: '/cleaner/new-address', state: { address: { address } } }}><img src={EditIcon} alt='edit' /> <span>edit</span></Link>
              <div onClick={() => setDeleteSelected(!deleteSelected)}><img src={DeleteIcon} alt='delete' /> <span>delete</span></div>
            </AddressCardBody>
          </>
      }
    </AddressCardContainer>
  );
}

export default AddressCardCleaner;