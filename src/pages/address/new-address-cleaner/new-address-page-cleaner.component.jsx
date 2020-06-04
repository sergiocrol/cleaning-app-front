/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';

import AddressForm from '../../../components/address-form/address-form.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import SpinnerButton from '../../../components/spinner-button/spinner-button.component';
import ModalNewAddress from '../../../components/modal/modal-new-address.component';
import Modal from '../../../components/modal/modal.component';

import usePosition from '../../../hooks/geolocation';
import useMapLocation from '../../../hooks/map-location';
import useModal from '../../../hooks/modal';

import { uploadImageFirebase } from '../../../helpers/save-image-firebase';
import { getAddress } from '../../../helpers/get-address-fields';

import { AuthContext } from '../../../contexts/auth-context';
import { CleanerContext } from '../../../contexts/cleaner-context';

import { NewAddressMap } from './new-address-page-cleaner.styles';
import {
  NewAddressPageContainer,
  NewAddressPageHeader
} from '../new-address-user/new-address-page-user.styles';

const NewAddresPage = props => {
  const { latitude, longitude } = usePosition();
  const { isShowing, toggle } = useModal();
  const { user, update } = useContext(AuthContext);
  const { createAddress, editAddress } = useContext(CleanerContext);

  const isEdit = props.location.state ? props.location.state.address : null;
  const [submitForm, setSubmitForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    addressName: '',
    addressStreet: '',
    addressNumber: '',
    squareMeters: '',
    city: '',
    zipCode: '',
    image: '',
    lat: latitude,
    lng: longitude,
    addressSelected: false
  });
  const { image, lat, lng } = formFields;

  const { googleMapRef } = useMapLocation(lat, lng);
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const setFields = (fields) => {
    const { street_number, route, locality, postal_code, image, lat, lng, addressSelected } = fields;
    return { ...formFields, addressStreet: route + ', ' + street_number, city: locality, zipCode: postal_code, image, lat, lng, addressSelected };
  }

  useEffect(() => {
    if (submitForm) {
      setLoading(true);
      getAddress(formFields)
        .then(fields => {
          console.log(fields);
          let addressFields = fields;
          if (fields.lat && fields.locality) {
            addressFields = setFields(fields);
          }
          setSubmitForm(false);
          uploadImageFirebase({ lat, lng, image, userId: user._id })
            .then(url => {
              const address = { ...addressFields, mapImage: url, long: addressFields.lng, name: addressFields.addressName };
              isEdit
                ? editAddress(isEdit.address._id, address)
                  .then(res => {
                    setLoading(false);
                    update();
                    toggle(!isShowing);
                  })
                  .catch(error => {
                    console.log(error);
                    setLoading(false);
                  })
                : createAddress(address)
                  .then(res => {
                    setLoading(false);
                    update();
                    toggle(!isShowing);
                  })
                  .catch(error => {
                    console.log(error);
                    setLoading(false);
                  })
            })
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [submitForm]);

  return (
    <NewAddressPageContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <ModalNewAddress isEdit={isEdit} />
      </Modal>
      <NewAddressPageHeader>
        <h2>{isEdit ? 'Edit your house' : 'Add your house'}</h2>
        <span>Add detailed info about your house, so that we can manage your services in the best way</span>
      </NewAddressPageHeader>
      <AddressForm user={user} address={isEdit} setFormFields={setFormFields} formFields={formFields} setSubmitForm={setSubmitForm} />
      <NewAddressMap>
        <div
          id="google-map"
          ref={googleMapRef}
          style={mapStyles}
        />
      </NewAddressMap>
      <CustomButton form='address-form' type="submit" width='150' fontweight='lighter' disabled={isLoading}>
        {isLoading ? <SpinnerButton /> : isEdit ? 'Edit Address' : 'Add Address'}
      </CustomButton>
    </NewAddressPageContainer>
  );
}

export default NewAddresPage;