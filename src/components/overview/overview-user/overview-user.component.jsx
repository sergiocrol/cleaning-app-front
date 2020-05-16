import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import CleanerCard from '../../cleaner-card/cleaner-card.component';
import SwitchButton from '../../switch-button/switch-button.component';

import { UserContext } from '../../../contexts/user-context';

import { ReactComponent as Up } from '../../../assets/slide/up.svg';
import { ReactComponent as Down } from '../../../assets/slide/down.svg';

import { OverviewUserContainer, OverviewUserTitle, OverviewUserRequests } from './overview-user.styles';

const OverviewUser = () => {
  const [redirect, setRedirect] = useState('');
  const [isRequestHidden, setRequestHidden] = useState(false);
  const [isTotalPrice, setTotalPrice] = useState(false);
  const { cleaners, currentJob, currentJob: { duration }, currentAddress } = useContext(UserContext);

  const redirectCleanerPage = (cleanerId) => {
    setRedirect(`/user/cleaner/${cleanerId}/`)
  }

  return (
    <OverviewUserContainer>
      {redirect ? <Redirect to={redirect} /> : null}
      {currentJob && currentJob.requests && currentJob.requests.length
        ? <OverviewUserTitle onClick={() => setRequestHidden(!isRequestHidden)}>
          Requests {
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
              return request.cleaner
                ? (<CleanerCard key={idx} cleaner={request.cleaner} jobDuration={duration} redirect={redirectCleanerPage} />)
                : null
            })
            : null
        }
      </OverviewUserRequests>
      <OverviewUserTitle>
        Cleaners near to you {currentAddress._id ? <span>{isTotalPrice ? 'total' : '€/h'}<SwitchButton onclick={() => setTotalPrice(!isTotalPrice)} /></span> : ''}
      </OverviewUserTitle>
      {
        cleaners && cleaners.length
          ? cleaners.map(cleaner => <CleanerCard key={cleaner._id} cleaner={cleaner} jobDuration={duration} redirect={redirectCleanerPage} total={isTotalPrice} addressDuration={currentAddress.duration} />)
          : null
      }
    </OverviewUserContainer>)
}

export default OverviewUser;