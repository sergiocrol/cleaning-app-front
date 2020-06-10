/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useContext } from 'react';

import { LoadingContext } from '../contexts/loading-context';

const useMapLocation = (lat, lng) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);
  const infoWindow = useRef(null);
  const [infoWindowContent, setInfoWindowContent] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const createGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        lat,
        lng
      },
      disableDefaultUI: true
    });
  }

  const createMarker = () => {
    return new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map: googleMap.current
    });
  }

  const createInfoWindow = () => {
    const infowindow = new window.google.maps.InfoWindow({
      content: infoWindowContent
    });
    infowindow.open(googleMap.current, marker.current);
  }

  const getGeocodeLocation = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'location': new window.google.maps.LatLng(lat, lng) }, function (results, status) {
      if (status == 'OK') {
        if (results[0]) {
          setInfoWindowContent(results[0].formatted_address);
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Cannot able to get location', status);
      }
    });
  }

  useEffect(() => {
    showLoading();
    const googleMapScript = document.createElement('script');
    googleMapScript.id = 'google-maps-api';
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      getGeocodeLocation();
      setMapLoaded(true);
      hideLoading();
    });

    return () => window.document.body.removeChild(window.document.getElementById('google-maps-api'));
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      getGeocodeLocation();
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
      infoWindow.current = createInfoWindow();
    }
  }, [lat, mapLoaded, infoWindowContent]);

  return {
    googleMapRef
  }
}

export default useMapLocation;