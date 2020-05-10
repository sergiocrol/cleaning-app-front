import React, { useContext } from 'react';

import CardLoading from '../card-loading/card-loading.component';

import { Cleaner, Rate, StarsOuter, StarsInner, Name, NameContainer, Price, CleanerCardContainer } from './cleaner-card.styles';

import { LoadingContext } from '../../contexts/loading-context';

const CleanerCard = ({ jobDuration, cleaner: { name, firstName, fee, _id, lastName, rate }, redirect }) => {
  const { loadingCleaners } = useContext(LoadingContext);
  const totalPrice = jobDuration ? (jobDuration / 60 * fee) : fee;

  return !loadingCleaners ? (
    <CleanerCardContainer onClick={() => redirect(_id)}>
      <Cleaner />
      <NameContainer>
        <Name>{name || firstName + ' ' + lastName}</Name>
        {
          rate
            ? <Rate>
              <StarsOuter>
                <StarsInner rate={rate} />
              </StarsOuter>
            </Rate>
            : null
        }
      </NameContainer>
      <Price>{totalPrice}<span>{jobDuration ? '€' : '€/h'}</span></Price>
    </CleanerCardContainer>
  ) : <CardLoading />;
}

export default CleanerCard;