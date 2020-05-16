import { useEffect, useState } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({ latitude: 41.390205, longitude: 2.154007 });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const currentPosition = await position;
        const { coords: { latitude, longitude } } = currentPosition;
        setPosition({ latitude, longitude });
      });
    } else {
      setPosition({ latitude: 41.390205, longitude: 2.154007 })
    }
  }, []);

  return { ...position };
}

export default usePosition;