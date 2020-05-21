/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Link } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

import usePosition from '../../hooks/geolocation';
import { getMapImage } from '../../helpers/get-map-image';

import { MapPageContainer, MapPageForm, Button } from './map-page.styles';

const MapPage = ({ google, map, ...other }) => {
  const { latitude, longitude } = usePosition();
  const [showingInfoWindow, setShowingInfoWindow] = useState(true);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [currentLocation, setCurrentLocation] = useState({ lat: 41.390205, lng: 2.154007 })
  const [locationFields, setLocationFields] = useState({ street_number: '', route: '', locality: '', postal_code: '', lat: '', lng: '', image: '' })
  const [showButton, setShowButton] = useState(false);

  const { route, street_number } = locationFields;

  console.log(activeMarker, selectedPlace, showingInfoWindow)
  useEffect(() => {
    setCurrentLocation({ lat: latitude, lng: longitude });
    renderAutoComplete();
    if (activeMarker && activeMarker.marker) {
      setActiveMarker(activeMarker.marker);
      setSelectedPlace(activeMarker.props.name);
      setShowingInfoWindow(true);
    }
  }, [latitude]);

  const mapStyle = {
    width: '100%',
    height: 'calc(100vh - 60px)',
    position: 'absolute',
    stylers: [
      {
        color: '#dceafa'
      }
    ]
  };

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setShowButton(false);
    document.getElementById('locationInput').value = '';
  }

  const getFields = (address, lat, lng) => {
    let fields = {
      street_number: '',
      route: '',
      locality: '',
      postal_code: ''
    }

    for (let i = 0; i < address.length; i++) {
      const addressType = address[i].types[0];
      const val = address[i]['short_name'];
      fields[addressType] = val;
    }

    setCurrentLocation({ lat, lng });
    fields = { ...fields, lat, lng };
    getMapImage(lat, lng)
      .then(image => setLocationFields({ ...fields, image }));
  }
  const renderAutoComplete = () => {

    const input = document.getElementById('locationInput');
    const options = {
      types: ['geocode'],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);

    autocomplete.addListener('place_changed', () => {
      const addressObject = autocomplete.getPlace();
      const address = addressObject.address_components;

      if (address) {
        const location = addressObject.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        setShowButton(true);
        getFields(address, lat, lng);
      }

    });
  }

  return (
    <MapPageContainer>
      <MapPageForm onSubmit={onSubmit}>
        <input
          placeholder="Enter a location"
          id='locationInput'
          type="text"
        />

        <input type="submit" value="&#10005;" />
      </MapPageForm>
      <Map
        google={google}
        zoom={17}
        style={mapStyle}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        fullscreenControl={false}
        mapTypeControl={false}
        zoomControl={false}
        streetViewControl={false}
        initialCenter={{
          lat: currentLocation.lat,
          lng: currentLocation.lng
        }}
        center={{
          lat: currentLocation.lat,
          lng: currentLocation.lng
        }}
      >
        <Marker
          ref={(gfh) => { setActiveMarker(gfh) }}
          name='current location'
          position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
        />
        <InfoWindow
          marker={activeMarker.marker}
          visible={showingInfoWindow}
          style={{ top: '-50px' }}
        >
          <div>
            <h4>{route}{street_number ? `, ${street_number}` : ''}</h4>
          </div>
        </InfoWindow>
      </Map>
      <Link to={{ pathname: '/user/new-address', state: locationFields }}><Button showbutton={showButton}>Confirm</Button></Link>
    </MapPageContainer>
  );
}

export default GoogleApiWrapper({
  // apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // libraries: ['places'],
  LoadingContainer: Spinner
})(MapPage);
