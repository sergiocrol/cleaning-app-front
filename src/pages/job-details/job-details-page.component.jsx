/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import SlideJob from '../../components/carousel/carousel-user/slide/slide-job-user.component';
import FilterPrice from '../../components/filter-price/filter-price.component';
import CleanerCard from '../../components/cleaner-card/cleaner-card.component';

import { CleanersPriceRange } from '../../helpers/price-range';
import getButtonStatus from '../../helpers/get-button-status';

import BackgroundImage from '../../assets/backgrounds/bg4-alpha.svg';

import { AuthContext } from '../../contexts/auth-context';

import {
  JobDetailsPageContainer,
  ImageBackground,
  JobDetailsPageHeader,
  JobDetailsPageTitle,
  JobDetailsPageBody
} from './job-details-page.styles';

const JobDetailsPage = ({ match: { params: { jobId } } }) => {
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [cleaners, setCleaners] = useState([]);
  const [isTotalPrice, setTotalPrice] = useState(false);
  const [cleanerFee, setCleanerFee] = useState(0);
  const [filteredCleaners, setFilteredCleaners] = useState(cleaners);

  useEffect(() => {
    if (user.jobs) {
      setJob(user.jobs.filter(job => job._id === jobId)[0]);
    }
  }, [user.jobs, user]);

  useEffect(() => {
    if (job) {
      const cleaners = [];
      job.requests.forEach(req => {
        req.cleaner && cleaners.push(req.cleaner);
      });
      setCleaners(cleaners);
      cleaners.length && setCleanerFee(CleanersPriceRange(cleaners, isTotalPrice, job.duration, null)[1]);
    }
  }, [job, isTotalPrice]);

  useEffect(() => {
    let cleanersFiltered = cleaners;

    const roundedPrice = (fee, duration) => {
      return Math.round((duration / 60 * fee));
    }

    if (isTotalPrice && job.duration) {
      cleanersFiltered = cleaners.filter(cleaner => roundedPrice(cleaner.fee, job.duration) <= cleanerFee);
    } else {
      cleanersFiltered = cleaners.filter(cleaner => cleaner.fee <= cleanerFee);
    }

    setFilteredCleaners(cleanersFiltered);
  }, [cleanerFee]);

  const handlePrice = event => {
    setCleanerFee(event.target.value * 1);
  }

  return (
    <JobDetailsPageContainer>
      <ImageBackground src={BackgroundImage} />
      <Link to='/user/profile'><JobDetailsPageTitle><span>&#10092;</span>Job's details</JobDetailsPageTitle></Link>
      {
        job
          ? <JobDetailsPageHeader><SlideJob job={job} showRequests={false} /></JobDetailsPageHeader>
          : null
      }
      <JobDetailsPageBody>
        <h3>Requests</h3>
        {
          job && job.requests.length && filteredCleaners.length
            ? <>
              <FilterPrice
                value={cleanerFee}
                min={CleanersPriceRange(cleaners, isTotalPrice, job.duration, null)[0]}
                max={CleanersPriceRange(cleaners, isTotalPrice, job.duration, null)[1]}
                isTotalPrice={isTotalPrice}
                togglePrice={() => setTotalPrice(!isTotalPrice)}
                onChange={handlePrice}
              />
              {
                filteredCleaners.map((request, idx) =>
                  <CleanerCard
                    key={idx}
                    cleaner={request}
                    job={job}
                    isTotalPrice={isTotalPrice}
                    button={getButtonStatus(job, idx)}
                  />
                )
              }
            </>
            : null
        }
      </JobDetailsPageBody>
    </JobDetailsPageContainer>
  );
}

export default JobDetailsPage;