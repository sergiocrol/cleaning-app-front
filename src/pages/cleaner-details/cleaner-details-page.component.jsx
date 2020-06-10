/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';

const CleanerDetailsPage = ({ match: { params: { cleanerId } } }) => {
  const { currentJob, getCleaner, cancelRequest, sendRequest } = useContext(UserContext);
  const [cleaner, setCleaner] = useState({});
  const [button, setButton] = useState({ action: () => { }, text: 'Send Request' });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getCleaner(cleanerId)
      .then(cleaner => {
        setCleaner(cleaner);
      })
      .catch(error => {
        console.log(error);
      });
    defineButton();
  }, [])

  const defineButton = () => {
    currentJob._id
      ? currentJob.requests.map(req => req.cleaner).includes(cleanerId)
        ? setButton({ action: removeRequest, text: 'Cancel Request' })
        : setButton({ action: newRequest, text: 'Send Request' })
      : setButton({ action: newJob, text: 'Send Request' })
  }

  const removeRequest = () => {
    const { _id } = currentJob.requests.filter(req => req.cleaner === cleanerId)[0];
    cancelRequest(currentJob._id, _id)
      .then(request => {
        console.log('Request canceled');
        setButton({ action: newRequest, text: 'Send Request' });
      })
      .catch(error => {
        console.log('Not able to cancel the request');
      })
  }

  const newRequest = () => {
    sendRequest(currentJob._id, cleanerId)
      .then(request => {
        setButton({ action: removeRequest, text: 'Cancel Request' })
      })
      .catch(error => {
        console.log('Not able to send the request')
      })
  }

  const newJob = () => {
    setRedirect(true);
  }

  return (
    <div>
      {redirect ? <Redirect to={{ pathname: '/user/new-job', state: { cleaner } }} /> : null}
      <h1>This is {cleaner ? cleaner.name || cleaner.firstName : 'cleaner'}</h1>
      <button onClick={button.action}>{button.text}</button>
    </div>
  );
}

export default CleanerDetailsPage;