import React, { useState, useContext } from 'react';

import CleanerCard from '../../components/cleaner-card/cleaner-card.component';
import EmptyCard from '../../components/empty-card/empty-card.component';

import { CLEANER } from '../../constants/index';

import { ReactComponent as Up } from '../../assets/slide/up.svg';
import { ReactComponent as Down } from '../../assets/slide/down.svg';

import { UserContext } from '../../contexts/user-context';

import { OverviewUserRequests, OverviewUserTitle } from './requests-dropdown.styles';

const RequestsDropdown = ({ currentRequest, toggle }) => {
  const [isRequestHidden, setRequestHidden] = useState(false);
  const { currentJob } = useContext(UserContext);

  const pendingRequests = () => {
    return currentJob.requests.filter(request => request.confirmed === null && request.sender === CLEANER);
  }

  const showModal = (request) => {
    toggle();
    currentRequest(request);
  }

  return (
    <>
      <OverviewUserTitle onClick={() => setRequestHidden(!isRequestHidden)}>
        New requests {
          isRequestHidden
            ? <Down width='20px' height='20px' style={{ marginLeft: '5px', stroke: '#4672ed' }} />
            : <Up width='20px' height='20px' style={{ marginLeft: '5px', stroke: '#4672ed' }} />
        }
      </OverviewUserTitle>
      <OverviewUserRequests ishidden={isRequestHidden}>
        {
          currentJob && currentJob.requests && pendingRequests().length
            ? pendingRequests().map(request =>
              <CleanerCard
                key={currentJob._id}
                request={request}
                cleaner={request.cleaner}
                job={currentJob}
                showModal={showModal} />)
            : <EmptyCard />
        }
      </OverviewUserRequests>
    </>
  );
}

export default RequestsDropdown;