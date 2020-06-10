import React from 'react';

import { getDate, getTime } from '../../../../helpers/date';
import { jobDuration } from '../../../../helpers/calculate-duration';

import {
  SlideContainer,
  SlideHeader,
  SlideTitle,
  DateLine,
  RoomsLine,
  RequestsLine,
  AddressContainer,
  SlideBody,
  SlideAddressTime,
  SlideTotalTime
} from './slide-job-user.styles';

import { ReactComponent as Address } from '../../../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as Requests } from '../../../../assets/menu/profile-select.svg';

const SlideJobUser = ({ job, showRequests }) => {
  const { address, date, rooms, duration, requests } = job;
  const { hours, minutes } = jobDuration(duration);

  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  return (
    <SlideContainer onClick={() => { }}>
      <SlideHeader>
        <SlideAddressTime>
          <SlideTitle>
            <Address style={{ width: '25px', marginRight: '10px' }} />{address ? address.name : null}
          </SlideTitle>
          <AddressContainer>
            <DateLine><span>{getDate(date)}</span><span>{getTime(date)}</span></DateLine>
          </AddressContainer>
        </SlideAddressTime>
        <SlideTotalTime minutes={minutes}>
          <span>total time</span>
          <h1>{hours}<span>h</span>{minutes > 0 ? minutes : null}<span>{minutes > 0 ? 'm' : ''}</span></h1>
        </SlideTotalTime>
      </SlideHeader>
      <SlideBody>
        <RoomsLine>
          <div><Kitchen style={{ width: '25px' }} /><span>{getRoomNumber('kitchen')}</span></div>
          <div><Bedroom style={{ width: '25px' }} /><span>{getRoomNumber('room')}</span></div>
          <div><Bathroom style={{ width: '25px' }} /><span>{getRoomNumber('bathroom')}</span></div>
          <div><Livingroom style={{ width: '25px' }} /><span>{getRoomNumber('terrace')}</span></div>
        </RoomsLine>
        {
          showRequests
            ? <RequestsLine><Requests style={{ width: '35px', height: '35px', marginRight: '10px', fill: '#37438C', marginBottom: '5px' }} /><h3>{requests.length}</h3> <span>requests</span></RequestsLine>
            : null
        }
      </SlideBody>
    </SlideContainer>
  );
}

export default SlideJobUser;