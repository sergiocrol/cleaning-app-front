/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import CleanerCard from '../../cleaner-card/cleaner-card.component';
import FilterPrice from '../../filter-price/filter-price.component';
import ModalCleanerRequest from '../../modal/modal-cleaner-request.component';
import Modal from '../../modal/modal.component';

import { CleanersPriceRange } from '../../../helpers/price-range';
import useModal from '../../../hooks/modal';

import { UserContext } from '../../../contexts/user-context';

import { ReactComponent as Up } from '../../../assets/slide/up.svg';
import { ReactComponent as Down } from '../../../assets/slide/down.svg';

import { OverviewUserContainer, OverviewUserTitle, OverviewUserRequests } from './overview-user.styles';

const OverviewUser = () => {
  const [redirect, setRedirect] = useState('');
  const [isRequestHidden, setRequestHidden] = useState(false);
  const [isTotalPrice, setTotalPrice] = useState(false);
  const { cleaners, currentJob, currentJob: { duration }, currentAddress } = useContext(UserContext);
  const [cleanerFee, setCleanerFee] = useState(0);
  const [currentRequest, setCurrentRequest] = useState({});
  const [filteredCleaners, setFilteredCleaners] = useState(cleaners);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (cleaners && cleaners.length) {
      setCleanerFee(CleanersPriceRange(cleaners, statusTotalPrice(), duration, currentAddress.duration)[1]);
    }
  }, [cleaners, isTotalPrice])

  useEffect(() => {
    let cleanersFiltered = cleaners;

    const roundedPrice = (fee, duration) => {
      return Math.round((duration / 60 * fee));
    }

    if (isTotalPrice) {
      if (duration) {
        cleanersFiltered = cleaners.filter(cleaner => roundedPrice(cleaner.fee, duration) <= cleanerFee);
      } else if (currentAddress.duration) {
        cleanersFiltered = cleaners.filter(cleaner => roundedPrice(cleaner.fee, currentAddress.duration) <= cleanerFee);
      }
    } else {
      cleanersFiltered = cleaners.filter(cleaner => cleaner.fee <= cleanerFee);
    }

    setFilteredCleaners(cleanersFiltered);
  }, [cleanerFee]);

  const redirectCleanerPage = (cleanerId) => {
    setRedirect(`/user/cleaner/${cleanerId}/`)
  }

  const statusTotalPrice = () => {
    return !currentJob.duration && !currentAddress.duration ? false : isTotalPrice
  }

  const handlePrice = event => {
    setCleanerFee(event.target.value * 1);
  }

  const showModal = (request) => {
    toggle(!isShowing);
    setCurrentRequest(request);
  }

  return (
    <OverviewUserContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <ModalCleanerRequest request={currentRequest} job={currentJob} />
      </Modal>
      {redirect ? <Redirect to={redirect} /> : null}
      {currentJob && currentJob.requests && currentJob.requests.length
        ? <OverviewUserTitle onClick={() => setRequestHidden(!isRequestHidden)}>
          New requests {
            isRequestHidden
              ? <Down width='20px' height='20px' style={{ marginLeft: '5px', stroke: '#4672ed' }} />
              : <Up width='20px' height='20px' style={{ marginLeft: '5px', stroke: '#4672ed' }} />
          }
        </OverviewUserTitle>
        : null
      }
      <OverviewUserRequests ishidden={isRequestHidden}>
        {
          currentJob && currentJob.requests && currentJob.requests.length
            ? currentJob.requests.map((request, idx) => {
              return request.confirmed === null && request.sender === 'cleaner'
                ? (<CleanerCard
                  key={idx}
                  request={request}
                  cleaner={request.cleaner}
                  jobDuration={duration}
                  redirect={redirectCleanerPage}
                  showModal={showModal} />)
                : null
            })
            : null
        }
      </OverviewUserRequests>
      <OverviewUserTitle>
        Cleaners near to you
      </OverviewUserTitle>
      {
        cleaners && cleaners.length
          ? <>
            <FilterPrice
              value={cleanerFee}
              min={CleanersPriceRange(cleaners, statusTotalPrice(), duration, currentAddress.duration)[0]}
              max={CleanersPriceRange(cleaners, statusTotalPrice(), duration, currentAddress.duration)[1]}
              isTotalPrice={statusTotalPrice()}
              togglePrice={() => setTotalPrice(!isTotalPrice)}
              noSwitchButton={!currentJob.duration && !currentAddress.duration}
              onChange={handlePrice}
            />
            {
              filteredCleaners.map(cleaner =>
                <CleanerCard
                  key={cleaner._id}
                  cleaner={cleaner}
                  jobDuration={duration}
                  addressDuration={currentAddress.duration}
                  isTotalPrice={isTotalPrice}
                  redirect={redirectCleanerPage}
                />)
            }
          </>
          : null
      }
    </OverviewUserContainer>)
}

export default OverviewUser;