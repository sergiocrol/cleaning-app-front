import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useMapLocation from '../../hooks/map-location';
import usePosition from '../../hooks/geolocation';

import { getFields } from '../../helpers/get-address-fields';

import { Map, InputContainer, MapPageContainer, Button } from './map-page.styles';

const MapPage = () => {
  const { latitude, longitude } = usePosition();
  const [showButton, setShowButton] = useState(false);
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
  const { googleMapRef } = useMapLocation(formFields.lat, formFields.lng);

  console.log(formFields);

  const setFields = (fields) => {
    const { street_number, route, locality, postal_code, image, lat, lng, addressSelected } = fields;
    setFormFields({ ...formFields, addressStreet: route + ', ' + street_number, city: locality, zipCode: postal_code, image, lat, lng, addressSelected });
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
        setShowButton(true);
        const data = await getFields(address, lat, lng, addressSelected);
        setFields(data);
      }
    });
  }

  const handleAddress = () => {
    showButton && setShowButton(false);
  }

  return (
    <MapPageContainer>
      <InputContainer>
        <input
          type='text'
          name='googleSearch'
          placeholder='Plaça Catalunya, 31'
          id='locationInput'
          onFocus={renderAutoComplete}
          onChange={handleAddress}
        />
        <span>&#10005;</span>
      </InputContainer>
      <Map id="google-map" ref={googleMapRef} />
      <Button to={{ pathname: '/user/new-address', state: { address: { address: formFields } } }} showbutton={showButton.toString()}>Confirm</Button>
    </MapPageContainer>
  );
}

export default MapPage;