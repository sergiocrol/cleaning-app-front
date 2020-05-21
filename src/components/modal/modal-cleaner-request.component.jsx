import React from 'react';

import Rate from '../rate/rate.component';
import { ButtonHire, ButtonReject } from '../../components/button-status/button-status.component';

import { getDate, getTime } from '../../helpers/date';

import { ReactComponent as HouseIcon } from '../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../assets/new-job/bathroom-icon.svg';

import {
  ModalRequestContainer,
  ModalRequestHeader,
  ProfileCleanerImage,
  ModalRequestBody,
  DataInfo,
  PriceInfo,
  ModalRequestFooter,
  ModalRequestButtons
} from './modal-cleaner-request.styles';

const ModalCleanerRequest = ({ request: { _id: requestId, cleaner: { firstName, lastName, _id: cleanerId, rate, fee } }, job: { duration, date, rooms, _id: jobId } }) => {
  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  return (
    cleanerId
      ? <ModalRequestContainer>
        <ModalRequestHeader>
          <h4>Do you want to accept this request?</h4>
          <ProfileCleanerImage />
          <span>{firstName + ' ' + lastName}</span>
          <Rate rate={rate} />
        </ModalRequestHeader>
        <ModalRequestBody>
          <DataInfo>
            <div><HouseIcon /><span>0,3km</span> {duration / 60}h</div>
            <div>{getDate(date) + '-' + getTime(date)}</div>
          </DataInfo>
          <PriceInfo>
            {Math.round((duration / 60 * fee))}<span>€</span>
          </PriceInfo>
        </ModalRequestBody>
        <ModalRequestFooter>
          <div><Kitchen style={{ width: '25px' }} /><span>{getRoomNumber('kitchen')}</span></div>
          <div><Bedroom style={{ width: '25px' }} /><span>{getRoomNumber('room')}</span></div>
          <div><Bathroom style={{ width: '25px' }} /><span>{getRoomNumber('bathroom')}</span></div>
          <div><Livingroom style={{ width: '25px' }} /><span>{getRoomNumber('terrace')}</span></div>
        </ModalRequestFooter>
        <ModalRequestButtons>
          <ButtonHire job={jobId} request={requestId} message='Accept' />
          <ButtonReject job={jobId} request={requestId} message='Reject' />
        </ModalRequestButtons>
      </ModalRequestContainer>
      : null
  );
}

export default ModalCleanerRequest; 