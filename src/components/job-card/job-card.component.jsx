import React from 'react';
import { Link } from 'react-router-dom';

import { getDate, getTime } from '../../helpers/date';

import { ReactComponent as Address } from '../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../assets/new-job/bathroom-icon.svg';
import { ReactComponent as Cleaners } from '../../assets/menu/profile-select.svg';
import { ReactComponent as CleanerImage } from '../../assets/signup-page/cleaner-avatar.svg';

import {
  JobCardContainer,
  JobCardInfoAddress,
  JobCardInfoContainer,
  JobCardInfoDate,
  JobCardInfoRooms,
  JobCardPriceContainer,
  JobCardPriceDuration,
  JobCardCleaners
} from './job-card.styles';

const JobCard = ({ job: { status, address, date, rooms, duration, requests, _id } }) => {
  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  const getTotalPrice = () => {
    const request = requests.filter(req => req.confirmed);
    const price = request.cleaner ? request.cleaner.fee * (duration / 60) : '58';
    return price;
  }

  const getCleanerInfo = () => {
    const request = requests.filter(req => req.confirmed);
    const info = request.cleaner ? request.cleaner.firstName + ' ' + request.cleaner.lastName : 'name';
    return info;
  }

  return (
    <Link to={`/user/job/${_id}`} style={{ width: '100%' }}>
      <JobCardContainer>
        <JobCardInfoContainer>
          <JobCardInfoAddress>
            <Address style={{ width: '25px', marginRight: '10px' }} />{address.name}
          </JobCardInfoAddress>
          <JobCardInfoDate>
            <span>{getDate(date)}</span><span>{getTime(date)}</span>
          </JobCardInfoDate>
          <JobCardInfoRooms>
            <div><Kitchen style={{ width: '25px', marginRight: '5px' }} /><span>{getRoomNumber('kitchen')}</span></div>
            <div><Bedroom style={{ width: '25px', marginRight: '5px' }} /><span>{getRoomNumber('room')}</span></div>
            <div><Bathroom style={{ width: '25px', marginRight: '5px' }} /><span>{getRoomNumber('bathroom')}</span></div>
            <div><Livingroom style={{ width: '25px', marginRight: '5px' }} /><span>{getRoomNumber('terrace')}</span></div>
          </JobCardInfoRooms>
        </JobCardInfoContainer>
        <JobCardPriceContainer status={status}>
          {
            status === 'pending'
              ? <>
                <JobCardPriceDuration>
                  <span>Total time</span>
                  <span>{duration / 60}<span>h</span></span>
                </JobCardPriceDuration>
                <JobCardCleaners>
                  <span><Cleaners style={{ width: '25px', height: '25px', marginRight: '5px', fill: 'white' }} />{requests.length}</span>
                  <span>cleaners</span>
                </JobCardCleaners>
              </>
              : <>
                <JobCardPriceDuration>
                  <span>Total price</span>
                  <span>{getTotalPrice()}<span>€</span></span>
                </JobCardPriceDuration>
                <JobCardCleaners>
                  <span><CleanerImage style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#4672ed' }} /><span>{getCleanerInfo()}</span></span>
                </JobCardCleaners>
              </>
          }
        </JobCardPriceContainer>
      </JobCardContainer>
    </Link>
  );
}

export default JobCard;