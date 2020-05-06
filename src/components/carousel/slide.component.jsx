import React from 'react';

import { SlideContainer, SlideHeader, SlideTitle, AddressLine, DateLine, RoomsLine, RequestsLine, AddressContainer } from './slide.styles';
import Address from '../../assets/slide/address.png';
import DateImg from '../../assets/slide/date.png';
import Kitchen from '../../assets/slide/kitchen.png';
import Bathroom from '../../assets/slide/bathroom.png';
import Room from '../../assets/slide/room.png';
import Terrace from '../../assets/slide/terrace.png';
import Requests from '../../assets/slide/requests.png';

const Slide = ({ job }) => {
  const { address, date, rooms, duration, requests } = job;

  const getFinishTime = (formatDate) => {
    let finishDate = new Date(formatDate.getTime() + duration * 60000);
    finishDate = finishDate.getHours() + ':' + finishDate.getMinutes();
    return finishDate;
  }

  const getDate = (date) => {
    let formatDate = 'no date';
    if (date !== undefined) {
      formatDate = new Date(date);
      formatDate = `${formatDate.getFullYear()}/${formatDate.getMonth() + 1}/${formatDate.getDate()} \n
      ${formatDate.getHours()}:${formatDate.getMinutes()}h - ${getFinishTime(formatDate)}h`;
    }
    return formatDate;
  }

  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  return (
    <SlideContainer onClick={() => { }}>
      <SlideTitle>{address.name}</SlideTitle>
      <SlideHeader>
        <AddressContainer>
          <AddressLine><img src={Address} alt='address' /><span>{address.addressStreet}</span></AddressLine>
          <DateLine><img src={DateImg} alt='date' /><span>{getDate(date)}</span></DateLine>
        </AddressContainer>
        <RoomsLine>
          <div><img src={Kitchen} alt='kitchen' /><span>{getRoomNumber('kitchen')}</span></div>
          <div><img src={Room} alt='room' /><span>{getRoomNumber('room')}</span></div>
          <div><img src={Bathroom} alt='bathroom' /><span>{getRoomNumber('bathroom')}</span></div>
          <div><img src={Terrace} alt='terrace' /><span>{getRoomNumber('terrace')}</span></div>
        </RoomsLine>
      </SlideHeader>
      <RequestsLine><img src={Requests} alt='requests' />{requests.length} requests</RequestsLine>

    </SlideContainer>
  );
}

export default Slide;