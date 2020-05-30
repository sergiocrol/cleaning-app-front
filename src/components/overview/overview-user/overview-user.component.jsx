/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import CleanerCard from '../../cleaner-card/cleaner-card.component';
import FilterPrice from '../../filter-price/filter-price.component';
import ModalCleanerRequest from '../../modal/modal-cleaner-request.component';
import ModalSendRequest from '../../modal/modal-send-request.component';
import Modal from '../../modal/modal.component';
import RequestsDropdown from '../../../components/requests-dropdown/requests-dropdown.component';

import { CleanersPriceRange } from '../../../helpers/price-range';

import useModal from '../../../hooks/modal';

import { UserContext } from '../../../contexts/user-context';

import { OverviewUserContainer, OverviewUserTitle } from './overview-user.styles';

const OverviewUser = () => {
  const [redirect, setRedirect] = useState('');
  const [isTotalPrice, setTotalPrice] = useState(false);
  const [hireButton, setHireButton] = useState(false);
  const { cleaners, currentJob, currentJob: { duration }, currentAddress, userState } = useContext(UserContext);
  const [cleanerFee, setCleanerFee] = useState(0);
  const [currentRequest, setCurrentRequest] = useState({});
  const [currentCleaner, setCurrentCleaner] = useState({});
  const [filteredCleaners, setFilteredCleaners] = useState(cleaners);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (cleaners && cleaners.length) {
      setCleanerFee(CleanersPriceRange(cleaners, statusTotalPrice(), duration, currentAddress.duration)[1]);
    }
  }, [cleaners, isTotalPrice])

  useEffect(() => {
    if (cleaners && cleaners.length) {
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
    }
  }, [cleanerFee]);

  useEffect(() => {
    !isShowing && setHireButton(false);
  }, [isShowing])

  const redirectCleanerPage = (cleanerId) => {
    setRedirect(`/user/cleaner/${cleanerId}/`)
  }

  const statusTotalPrice = () => {
    return !currentJob.duration && !currentAddress.duration ? false : isTotalPrice
  }

  const handlePrice = event => {
    setCleanerFee(event.target.value * 1);
  }

  const showModal = (cleaner) => {
    setHireButton(true);
    setCurrentCleaner(cleaner);
    toggle(!isShowing);
  }

  const statusUser = (cleaner) => {
    return userState === 'job'
      ? cleaner
      : userState === 'address'
        ? 'new-job'
        : 'new-address'
  }

  return (
    <OverviewUserContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        {
          hireButton
            ? <ModalSendRequest cleaner={currentCleaner} job={currentJob} />
            : <ModalCleanerRequest request={currentRequest} job={currentJob} />
        }
      </Modal>
      {redirect ? <Redirect to={redirect} /> : null}
      {
        userState === 'job'
          ? <RequestsDropdown currentRequest={(request) => setCurrentRequest(request)} toggle={() => toggle(!isShowing)} />
          : null
      }
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
                  request={statusUser(cleaner)}
                  job={currentJob}
                  address={currentAddress}
                  isTotalPrice={isTotalPrice}
                  redirect={redirectCleanerPage}
                  showModal={showModal}
                />)
            }
          </>
          : null
      }
    </OverviewUserContainer>)
}

export default OverviewUser;