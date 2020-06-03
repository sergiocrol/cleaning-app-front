/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';

import { LoadingContext } from '../contexts/loading-context';

const usePosition = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [position, setPosition] = useState({ latitude: 41.390205, longitude: 2.154007 });

  useEffect(() => {
    if ('geolocation' in navigator) {
      showLoading();
      navigator.geolocation.getCurrentPosition(async (position) => {
        const currentPosition = await position;
        const { coords: { latitude, longitude } } = currentPosition;
        setPosition({ latitude, longitude });
        hideLoading();
      });
    } else {
      setPosition({ latitude: 41.390205, longitude: 2.154007 });
      hideLoading();
    }
  }, []);

  return { ...position };
}

export default usePosition;