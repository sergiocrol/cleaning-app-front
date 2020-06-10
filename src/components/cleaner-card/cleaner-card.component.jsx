import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import CardLoading from '../card-loading/card-loading.component';
import Rate from '../rate/rate.component';

import {
  Cleaner,
  Name,
  NameContainer,
  Price,
  CleanerCardContainer,
  ButtonContainer
} from './cleaner-card.styles';

import { LoadingContext } from '../../contexts/loading-context';

const CleanerCard = ({
  job: { duration: jobDuration },
  cleaner,
  request,
  isTotalPrice,
  address,
  button,
  showModal
}) => {
  const { name, firstName, fee, lastName, rate, picture } = cleaner;
  const { loadingCleaners } = useContext(LoadingContext);
  const [redirect, setRedirect] = useState(false);
  const totalPriceJob = jobDuration ? isTotalPrice ? Math.round((jobDuration / 60 * fee)) : fee : fee;
  const totalPriceAddress = address && address.duration ? isTotalPrice ? Math.round((address.duration / 60 * fee)) : fee : fee;

  const determineRoute = () => {
    return request
      ? request._id
        ? showModal(request)
        : setRedirect(true)
      : null
  }

  if (redirect) { return <Redirect to={{ pathname: `/user/${request}`, state: request === 'new-job' ? { cleaner } : null }} /> }

  return !loadingCleaners ? (
    <CleanerCardContainer onClick={determineRoute} button={button}>
      <Cleaner picture={picture} />
      <NameContainer>
        <Name>{name || firstName + ' ' + lastName}</Name>
        {
          rate
            ? <Rate rate={rate} />
            : null
        }
      </NameContainer>
      {jobDuration
        ? <Price jobduration={jobDuration}>{totalPriceJob}<span>{isTotalPrice ? '€' : '€/h'}</span></Price>
        : <Price addressduration={isTotalPrice}>{totalPriceAddress}<span>{isTotalPrice ? '€' : '€/h'}</span></Price>
      }
      {
        button
          ? <ButtonContainer>{button}</ButtonContainer>
          : null
      }
    </CleanerCardContainer>
  ) : <CardLoading />;
}

export default CleanerCard;