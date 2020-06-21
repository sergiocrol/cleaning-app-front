/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../contexts/user-context';

import { ReactComponent as Alert } from '../../assets/new-job/alert.svg';

import { EmptyCardContainer } from './empty-card.styles';

const EmptyCard = () => {
  const { currentJob } = useContext(UserContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    currentJob._id && createMessage();
  }, [currentJob]);

  const createMessage = () => {
    const isPrivate = currentJob.isPrivate;
    const numberRequests = currentJob.requests.filter(req => req.confirmed === null).length;
    const message = isPrivate
      ? numberRequests
        ? `Your request ${numberRequests === 0 ? 'does' : 'do'} not have response yet. You can make the job public to increase your opportunities.`
        : `You don't have new requests yet. You can make the job public in order to increase your opportunities.`
      : numberRequests
        ? `Your request ${numberRequests === 0 ? 'does' : 'do'} not have response yet. Send more requests in order to increase your opportunities.`
        : 'You do not have new requests yet. Find and send requests to other cleaners in order to increase your opportunities.'
    setMessage(message);
  }

  return (
    <EmptyCardContainer>
      <Alert />
      <span>{message}</span>
    </EmptyCardContainer>
  );
}

export default EmptyCard;