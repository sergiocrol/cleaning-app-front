import React from 'react';

import Mask from '../../../assets/slide/mask3.png';
import { ReactComponent as HouseIcon } from '../../../assets/new-job/house-icon.svg';
import { ReactComponent as KitchenIcon } from '../../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as BedroomIcon } from '../../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as BathroomIcon } from '../../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as LivingroomIcon } from '../../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as KidsIcon } from '../../../assets/new-job/baby-icon.svg';
import { ReactComponent as PetsIcon } from '../../../assets/new-job/pet-icon.svg';

import { SlideAddressContainer, MapImage, MaskImage, SlideAddressHeader, SlideAddressBody } from './slide-address.styles';

const SlideAddress = ({ address }) => {
  const { mapImage, name, addressStreet, addressNumber, city, rooms, pets, kids } = address;
  const addressRooms = {};
  rooms.forEach(({ type, number }) => {
    addressRooms[type] = number;
  });

  return (
    <SlideAddressContainer>
      <SlideAddressHeader>
        <span><HouseIcon style={{ width: '25px', height: '25px', marginRight: '10px' }} /> {name}</span>
        <span>{addressStreet}{addressNumber ? `, ${addressNumber}, ` : ''}{city}</span>
      </SlideAddressHeader>
      <SlideAddressBody>
        <div>
          <div><BedroomIcon />{addressRooms.room}</div>
          <div><KitchenIcon />{addressRooms.kitchen}</div>
          <div><LivingroomIcon />{addressRooms.terrace}</div>
          <div><BathroomIcon />{addressRooms.bathroom}</div>
          <div><span><PetsIcon />{pets ? '✓' : '✗'}</span></div>
          <div><span><KidsIcon />{kids ? '✓' : '✗'}</span></div>
        </div>
      </SlideAddressBody>
      <MapImage src={mapImage} alt='map' />
      <MaskImage src={Mask} alt='mask' />
    </SlideAddressContainer>
  )
}

export default SlideAddress;