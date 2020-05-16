import React, { useContext } from 'react';

import CardLoading from '../card-loading/card-loading.component';

import { Cleaner, Rate, StarsOuter, StarsInner, Name, NameContainer, Price, CleanerCardContainer } from './cleaner-card.styles';

import { LoadingContext } from '../../contexts/loading-context';

const CleanerCard = ({ jobDuration, cleaner: { name, firstName, fee, _id, lastName, rate }, redirect, total, addressDuration }) => {
  const { loadingCleaners } = useContext(LoadingContext);
  const totalPriceJob = jobDuration ? Math.round((jobDuration / 60 * fee)) : fee;
  const totalPriceAddress = total ? Math.round((addressDuration / 60 * fee)) : fee;

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
      {jobDuration
        ? <Price jobduration={jobDuration}>{totalPriceJob}<span>{jobDuration ? '€' : '€/h'}</span></Price>
        : <Price addressduration={total}>{totalPriceAddress}<span>{total ? '€' : '€/h'}</span></Price>
      }

    </CleanerCardContainer>
  ) : <CardLoading />;
}

export default CleanerCard;