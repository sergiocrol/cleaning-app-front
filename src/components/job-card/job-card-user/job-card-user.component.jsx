import React from 'react';
import { Link } from 'react-router-dom';

import { getDate, getTime } from '../../../helpers/date';
import { jobDuration } from '../../../helpers/calculate-duration';

import { CONFIRMED } from '../../../constants/index';

import { ReactComponent as Address } from '../../../assets/new-job/house-icon.svg';
import { ReactComponent as Kitchen } from '../../../assets/new-job/kitchen-icon.svg';
import { ReactComponent as Bedroom } from '../../../assets/new-job/bedroom-icon.svg';
import { ReactComponent as Livingroom } from '../../../assets/new-job/livingroom-icon.svg';
import { ReactComponent as Bathroom } from '../../../assets/new-job/bathroom-icon.svg';

import {
  JobCardContainer,
  JobCardInfoAddress,
  JobCardInfoContainer,
  JobCardInfoDate,
  JobCardInfoRooms,
  JobCardPriceContainer,
  JobCardPriceDuration,
  JobCardCleaners,
  CleanerImage
} from './job-card-user.styles';

const JobCardUser = ({ job: { status, address, date, rooms, duration, requests, _id } }) => {
  const { hours, minutes } = jobDuration(duration);

  const getRoomNumber = (type) => {
    const room = rooms.filter(room => room.type === type)[0];
    return room ? room.number : 0;
  }

  const getTotalPrice = () => {
    const request = requests.filter(req => req.confirmed);
    const price = request.cleaner ? request.cleaner.fee * (duration / 60) : '58';
    return price;
  }

  const getCleanerInfo = (status) => {
    const request = requests.filter(req => status === CONFIRMED ? req.confirmed : req)[0];
    const info = request && request.cleaner
      ? { name: request.cleaner.firstName, picture: request.cleaner.picture }
      : { name: 'name', picture: null };
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
                <JobCardPriceDuration minutes={minutes}>
                  <span>Total time</span>
                  <h1>{hours}<span>h</span>{minutes > 0 ? minutes : null}<span>{minutes > 0 ? 'm' : ''}</span></h1>
                </JobCardPriceDuration>
                <JobCardCleaners>
                  <span>
                    <CleanerImage picture={getCleanerInfo().picture} requests={requests.length}>
                      {
                        requests.length > 1
                          ? <div>+{(requests.length - 1).toString()}</div>
                          : null
                      }
                    </CleanerImage>
                    <span>{requests.length ? getCleanerInfo().name : '0 cleaners'}</span>
                  </span>
                </JobCardCleaners>
              </>
              : <>
                <JobCardPriceDuration>
                  <span>Total price</span>
                  <h1>{getTotalPrice()}<span>€</span></h1>
                </JobCardPriceDuration>
                <JobCardCleaners>
                  <span>
                    <CleanerImage picture={getCleanerInfo(CONFIRMED).picture} />
                    <span>{getCleanerInfo(CONFIRMED).name}</span>
                  </span>
                </JobCardCleaners>
              </>
          }
        </JobCardPriceContainer>
      </JobCardContainer>
    </Link>
  );
}

export default JobCardUser;