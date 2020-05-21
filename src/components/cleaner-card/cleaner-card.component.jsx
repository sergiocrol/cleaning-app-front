import React, { useContext } from 'react';

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
  jobDuration,
  cleaner: { name, firstName, fee, lastName, rate },
  request,
  isTotalPrice,
  addressDuration,
  button,
  showModal
}) => {
  const { loadingCleaners } = useContext(LoadingContext);
  const totalPriceJob = jobDuration ? isTotalPrice ? Math.round((jobDuration / 60 * fee)) : fee : fee;
  const totalPriceAddress = addressDuration ? isTotalPrice ? Math.round((addressDuration / 60 * fee)) : fee : fee;

  return !loadingCleaners ? (
    <CleanerCardContainer onClick={() => request ? showModal(request) : null} button={button}>
      <Cleaner />
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