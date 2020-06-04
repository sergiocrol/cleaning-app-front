/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { getFields } from '../../helpers/get-address-fields';

import FormInput from '../../components/form-input/form-input.component';

import { ReactComponent as MapIcon } from '../../assets/new-address/locate.svg';

import {
  NewAddressPageForm,
  TwoFieldLine,
  LinkMap,
  AddressInput,
  AddressInputContainer
} from './address-form.styles';

const AddressForm = ({ user, address, setFormFields, formFields, setSubmitForm }) => {
  const { register, handleSubmit, errors } = useForm();
  const { addressName, addressStreet, addressNumber, squareMeters, city, zipCode } = formFields;

  useEffect(() => {
    if (address) {
      const { addressNumber, addressStreet, city, lat, long, mapImage, name, squareMeters, zipCode } = address.address;
      const editAddress = { addressName: name, addressStreet, addressNumber, squareMeters, city, zipCode, image: mapImage, lat, lng: long };
      setFormFields(editAddress);
    }
  }, []);

  const setFields = (fields) => {
    const { street_number, route, locality, postal_code, image, lat, lng, addressSelected } = fields;
    setFormFields({ ...formFields, addressStreet: route + ', ' + street_number, city: locality, zipCode: postal_code, image, lat, lng, addressSelected });
  }

  const handleInput = event => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleAddress = event => {
    const addressSelected = document.getElementById('locationInput').value === addressStreet;
    const newAddressStreet = document.getElementById('locationInput').value === addressStreet ? addressStreet : event.target.value;
    setFormFields({ ...formFields, addressStreet: newAddressStreet, addressSelected })
  }

  const renderAutoComplete = () => {
    const input = document.getElementById('locationInput');
    const options = {
      types: ['geocode'],
    };
    const autocomplete = new window.google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);

    autocomplete.addListener('place_changed', async () => {
      const addressObject = autocomplete.getPlace();
      const address = addressObject.address_components;

      if (address) {
        const location = addressObject.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        const addressSelected = true;
        const data = await getFields(address, lat, lng, addressSelected);
        setFields(data);
      }
    });
  }
  const onSubmit = () => {
    setSubmitForm(true);
  }

  return (
    <NewAddressPageForm id='address-form' onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name='addressName'
        placeholder='My house'
        register={register}
        onChange={handleInput}
        defaultValue={addressName}
        required='*this field is required'
        error={errors.addressName && errors.addressName.message}
      />
      {
        user.isCleaner
          ? <AddressInputContainer>
            <AddressInput
              isCleaner
              name='googleSearch'
              placeholder='Plaça Catalunya, 31'
              id='locationInput'
              onChange={handleAddress}
              value={addressStreet}
              onFocus={renderAutoComplete}
              ref={register({ required: "*this field is required" })}
            />
            <p>{errors.googleSearch && errors.googleSearch.message}</p>
          </AddressInputContainer>
          : <TwoFieldLine>
            <AddressInput
              name='googleSearch'
              onChange={handleAddress}
              placeholder='Plaça Catalunya, 31'
              width='187px'
              defaultValue={addressStreet}
              id='locationInput'
              onFocus={renderAutoComplete}
            />
            <LinkMap to='/user/new-address/map'><MapIcon style={{ width: '20px', height: '20px', stroke: 'white ', marginRight: '3px' }} />map</LinkMap>
          </TwoFieldLine>
      }
      <TwoFieldLine>
        <FormInput
          name='addressNumber'
          placeholder='2º 3'
          defaultValue={addressNumber}
          register={register}
          onChange={handleInput}
          width='187px'
        />
        <FormInput
          name='squareMeters'
          type='number'
          placeholder='m2'
          defaultValue={squareMeters}
          register={register}
          required='*required'
          onChange={handleInput}
          error={errors.squareMeters && errors.squareMeters.message}
          width='80px'
        />
      </TwoFieldLine>
      <TwoFieldLine>
        <FormInput
          name='city'
          placeholder='Barcelona'
          register={register}
          defaultValue={city}
          onChange={handleInput}
          required='*this field is required'
          error={errors.city && errors.city.message}
          width='187px'
        />
        <FormInput
          name='zipCode'
          placeholder='08024'
          defaultValue={zipCode}
          register={register}
          onChange={handleInput}
          required='*required'
          error={errors.zipCode && errors.zipCode.message}
          width='80px'
        />
      </TwoFieldLine>
    </NewAddressPageForm>
  );
}

export default AddressForm;