import React from 'react';

import { PENDING, CONFIRMED, FINISHED } from '../../../constants/index';

import { HistoryFilterContainer, HistoryButton } from './history-filter.styles';

const HistoryFilter = ({ jobs, handleChange, status }) => {
  return (
    <HistoryFilterContainer>
      <HistoryButton name='all' onClick={handleChange} isActived={status.all}>
        <span>{jobs ? jobs.length : 0}</span><span>jobs</span>
      </HistoryButton>
      <HistoryButton name={PENDING} onClick={handleChange} isActived={status.pending}>
        <span>{jobs ? jobs.filter(job => job.status === PENDING).length : 0}</span><span>pending</span>
      </HistoryButton>
      <HistoryButton name={CONFIRMED} onClick={handleChange} isActived={status.confirmed}>
        <span>{jobs ? jobs.filter(job => job.status === CONFIRMED).length : 0}</span><span>confirmed</span>
      </HistoryButton>
      <HistoryButton name={FINISHED} onClick={handleChange} isActived={status.finished}>
        <span>{jobs ? jobs.filter(job => job.status === FINISHED).length : 0}</span><span>finished</span>
      </HistoryButton>
    </HistoryFilterContainer>
  )
}

export default HistoryFilter;