import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Rate from '../rate/rate.component';
import { ButtonHire, ButtonReject } from '../../components/button-status/button-status.component';

import { getDate, getTime } from '../../helpers/date';
import { jobDuration } from '../../helpers/calculate-duration';

import { ReactComponent as HouseIcon } from '../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../assets/new-job/bathroom-icon.svg';
import Success from '../../assets/modals/success.png';

import {
  ModalRequestContainer,
  ModalRequestHeader,
  ProfileCleanerImage,
  ModalRequestBody,
  DataInfo,
  PriceInfo,
  ModalRequestFooter,
  ModalRequestButtons,
  ModalRequestConfirmation,
  Kilometers
} from './modal-cleaner-request.styles';

const ModalCleanerRequest = ({
  request: { _id: requestId, cleaner: { firstName, lastName, _id: cleanerId, rate, fee, picture } },
  job: { duration, date, rooms, _id: jobId }
}) => {
  const { hours, minutes } = jobDuration(duration);
  const [messageConfirmation, setMessageConfirmation] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  const confirmation = (res) => {
    setMessageConfirmation(res);
  }

  const reject = (res) => {
    setRedirect(res);
  }

  if (redirect) { return <Redirect to='/' /> }

  return (
    messageConfirmation
      ? <ModalRequestConfirmation>
        <img src={Success} alt='confirmed' />
        <h3>Congratulations!</h3>
        <span>You have a cleaner :)</span>
        <span>Remember you can see all the details of your confirmed job in your profile</span>
        <Link to='/user/profile'>profile</Link>
      </ModalRequestConfirmation>
      : cleanerId
        ? <ModalRequestContainer>
          <ModalRequestHeader>
            <h4>Do you want to accept this request?</h4>
            <ProfileCleanerImage picture={picture} />
            <span>{firstName + ' ' + lastName}</span>
            <Rate rate={rate} />
          </ModalRequestHeader>
          <ModalRequestBody>
            <DataInfo>
              <div>
                <HouseIcon />
                0,3<Kilometers>km</Kilometers> {hours}<span>h</span>{minutes ? minutes : null}<span>{minutes ? 'm' : null}</span>
              </div>
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
            <ButtonHire job={jobId} request={requestId} confirmation={confirmation} message='Accept' />
            <ButtonReject job={jobId} request={requestId} confirmation={reject} message='Reject' />
          </ModalRequestButtons>
        </ModalRequestContainer>
        : null
  );
}

export default ModalCleanerRequest; 