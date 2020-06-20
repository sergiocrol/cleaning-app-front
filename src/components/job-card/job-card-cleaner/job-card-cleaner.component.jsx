/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { getDate, getTime } from '../../../helpers/date';
import { jobDuration } from '../../../helpers/calculate-duration';

import { ReactComponent as Address } from '../../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../../assets/new-job/bathroom-icon.svg';

import { AuthContext } from '../../../contexts/auth-context';

import useJobRequest from '../../../hooks/job-request';

import {
  SlideContainer,
  SlideHeader,
  DateLine,
  RoomsLine,
  AddressContainer,
  SlideBody,
  SlideAddressTime
} from '../../carousel/carousel-user/slide/slide-job-user.styles';

import { JobCardTotalPrice, RequestStatus, SlideTitle } from './job-card-cleaner.styles';

const JobCardCleaner = ({ job, showStatus }) => {
  const { address, date, rooms, duration } = job;
  const { hours, minutes } = jobDuration(duration);
  const { user: { fee, _id } } = useContext(AuthContext);

  const [request, setRequest] = useState({});
  const { requestStatus } = useJobRequest(request);

  useEffect(() => {
    setRequest(job.requests.filter(req => req.cleaner === _id)[0])
  }, [job]);

  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  return (
    <SlideContainer>
      <SlideHeader>
        <SlideAddressTime>
          <SlideTitle>
            <Address style={{ width: '25px', marginRight: '10px' }} />{address ? address.city : null}
            <span>{hours}<span>h</span>{minutes > 0 ? minutes : null}<span>{minutes > 0 ? 'm' : ''}</span></span>
          </SlideTitle>
          <AddressContainer>
            <DateLine>
              <span>{getDate(date)}</span>
              <span>-</span>
              <span>{getTime(date)}</span>
            </DateLine>
          </AddressContainer>
        </SlideAddressTime>
        <JobCardTotalPrice status={requestStatus.symbol}>
          {
            showStatus && requestStatus.symbol
              ? <RequestStatus color={requestStatus.color}>
                <span>
                  {requestStatus.symbol}
                </span>
              </RequestStatus>
              : null
          }
          <h1>{Math.round((duration / 60) * fee)}<span>€</span></h1>
        </JobCardTotalPrice>
      </SlideHeader>
      <SlideBody>
        <RoomsLine>
          <div><Kitchen style={{ width: '25px' }} /><span>{getRoomNumber('kitchen')}</span></div>
          <div><Bedroom style={{ width: '25px' }} /><span>{getRoomNumber('room')}</span></div>
          <div><Bathroom style={{ width: '25px' }} /><span>{getRoomNumber('bathroom')}</span></div>
          <div><Livingroom style={{ width: '25px' }} /><span>{getRoomNumber('terrace')}</span></div>
        </RoomsLine>
      </SlideBody>
    </SlideContainer>
  );
}

export default JobCardCleaner;