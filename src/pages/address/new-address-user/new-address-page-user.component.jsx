/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import AddressForm from '../../../components/address-form/address-form.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import FormSelect from '../../../components/form-select/form-select.component';
import SpinnerButton from '../../../components/spinner-button/spinner-button.component';
import ModalNewAddress from '../../../components/modal/modal-new-address.component';
import Modal from '../../../components/modal/modal.component';

import { ReactComponent as KitchenIcon } from '../../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BathroomIcon } from '../../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as BedroomIcon } from '../../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Kids } from '../../../assets/new-job/baby-icon.svg';
import { ReactComponent as Pets } from '../../../assets/new-job/pet-icon.svg';

import { getAddress } from '../../../helpers/get-address-fields';
import { uploadImageFirebase } from '../../../helpers/save-image-firebase';
import { calculateTotalDuration, calculateRoomDuration } from '../../../helpers/calculate-duration';

import { AuthContext } from '../../../contexts/auth-context';
import { UserContext } from '../../../contexts/user-context';
import { LoadingContext } from '../../../contexts/loading-context';

import usePosition from '../../../hooks/geolocation';
import useModal from '../../../hooks/modal';

import {
  NewAddressPageContainer,
  NewAddressPageHeader,
  RoomsLine,
  OthersLine
} from './new-address-page-user.styles';

const NewAddressPage = props => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { latitude, longitude } = usePosition();
  const { isShowing, toggle } = useModal();
  const address = props.location.state ? props.location.state.address : null;

  const [submitForm, setSubmitForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useState({ kitchen: 0, room: 0, bathroom: 0, terrace: 0 });
  const [others, setOthers] = useState({ pets: false, kids: false });
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
  const { squareMeters } = formFields;

  const { register, errors, setError } = useForm();
  const { user, update } = useContext(AuthContext);
  const { createAddress, editAddress } = useContext(UserContext);
  const { showLoading, hideLoading } = useContext(LoadingContext);

  useEffect(() => {
    showLoading();
    const googleMapScript = window.document.createElement('script');
    googleMapScript.id = 'google-maps-api';
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      hideLoading();
    });
    if (address && address.address.name) {
      console.log(address)
      const { rooms, pets, kids } = address.address;
      const addressRooms = {};
      rooms.forEach(({ type, number }) => {
        addressRooms[type] = number;
      });
      setRooms({ kitchen: addressRooms.kitchen, room: addressRooms.room, bathroom: addressRooms.bathroom, terrace: addressRooms.terrace });
      setOthers({ pets, kids });
    }
    return () => window.document.body.removeChild(googleMapScript);
  }, []);

  useEffect(() => {
    if (submitForm) {
      const roomsGreaterThanZero = rooms.kitchen + rooms.room + rooms.bathroom + rooms.terrace;
      if (!roomsGreaterThanZero) {
        setError('emptyRooms', 'notEmpty', 'Please, add at least one room to your house');
        setSubmitForm(false);
      } else {
        setLoading(true);
        const allFields = { ...formFields, rooms, pets: others.pets, kids: others.kids };
        getAddress(allFields)
          .then(fields => {
            console.log(fields);
            let addressFields = fields;
            if (fields.lat && fields.locality) {
              addressFields = setFields(fields);
            }
            const roomsDuration = calculateRoomDuration(rooms, others, squareMeters);
            const totalDuration = calculateTotalDuration(roomsDuration);
            const { lng, addressName, addressNumber, addressStreet, city, zipCode, image, lat } = addressFields;
            const newAddress = {
              mapImage: image,
              long: lng,
              lat,
              name: addressName,
              addressNumber,
              addressStreet,
              city,
              zipCode,
              squareMeters,
              rooms: roomsDuration,
              duration: totalDuration,
              kids: addressFields.kids,
              pets: addressFields.pets
            };
            console.log(newAddress)

            setSubmitForm(false);
            uploadImageFirebase({ lat, lng, image, userId: user._id })
              .then(url => {
                const addressFields = { ...newAddress, mapImage: url };
                address && address.address.name
                  ? editAddress(address.address._id, addressFields)
                    .then(res => {
                      setLoading(false);
                      update();
                      toggle(!isShowing);
                    })
                    .catch(error => {
                      console.log(error);
                      setLoading(false);
                    })
                  : createAddress(addressFields)
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
    }
  }, [submitForm]);

  const onChangeRooms = event => {
    const { value, name } = event.target;
    setRooms({ ...rooms, [name]: value * 1 });
  }

  const onChangeOthers = event => {
    const { name } = event.target;
    setOthers({ ...others, [name]: !others[name] });
  }

  const formInputOptions = (selected) => {
    const options = [];
    for (let i = 0; i <= 5; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options;
  }

  const setFields = (fields) => {
    const { street_number, route, locality, postal_code, image, lat, lng, addressSelected } = fields;
    return { ...formFields, ...fields, addressStreet: route + ', ' + street_number, city: locality, zipCode: postal_code, image, lat, lng, addressSelected };
  }

  return (
    <NewAddressPageContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <ModalNewAddress isEdit={address && address.address.name} />
      </Modal>
      <NewAddressPageHeader>
        <h2>{address ? 'Edit your house' : 'Add your house'}</h2>
        <span>Add detailed info about your house, so that we can manage your services in the best way</span>
      </NewAddressPageHeader>
      <AddressForm user={user} address={address} formFields={formFields} setFormFields={setFormFields} setSubmitForm={setSubmitForm} />
      <h2>rooms</h2>
      <RoomsLine>
        <span><KitchenIcon /> <FormSelect value={rooms.kitchen} width='40' name='kitchen' register={register} onChange={onChangeRooms}>{formInputOptions()}</FormSelect></span>
        <span><BedroomIcon /> <FormSelect value={rooms.room} width='40' name='room' register={register} onChange={onChangeRooms}>{formInputOptions()}</FormSelect></span>
        <span><BathroomIcon /> <FormSelect value={rooms.bathroom} width='40' name='bathroom' register={register} onChange={onChangeRooms}>{formInputOptions()}</FormSelect></span>
        <span><LivingroomIcon /> <FormSelect value={rooms.terrace} width='40' name='terrace' register={register} onChange={onChangeRooms}>{formInputOptions()}</FormSelect></span>
      </RoomsLine>
      <h2>others</h2>
      <OthersLine>
        <span>
          <Kids />
          <FormSelect value={others.kids} width='50' name='kids' register={register} onChange={onChangeOthers}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </FormSelect>
        </span>
        <span>
          <Pets />
          <FormSelect value={others.pets} width='50' name='pets' register={register} onChange={onChangeOthers}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </FormSelect>
        </span>
      </OthersLine>
      <p>{errors.emptyRooms && errors.emptyRooms.message}</p>
      <CustomButton form='address-form' width='150' fontweight='lighter' type='submit' disabled={isLoading}>
        {isLoading ? <SpinnerButton /> : address && formFields.addressName ? 'Edit Address' : 'Add Address'}
      </CustomButton>
    </NewAddressPageContainer>
  );
}

export default NewAddressPage;