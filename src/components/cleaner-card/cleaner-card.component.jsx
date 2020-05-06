import React from 'react';

import { CleanerCardContainer } from './cleaner-card.styles';
import { Cleaner, Rate, StarsOuter, StarsInner, Name, NameContainer, Price } from './cleaner-card.styles';

const CleanerCard = ({ jobDuration, cleaner: { name, firstName, fee, _id, lastName, rate }, redirect }) => {

  const totalPrice = jobDuration ? (jobDuration / 60 * fee) : fee;

  return (
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
  );
}

export default CleanerCard;