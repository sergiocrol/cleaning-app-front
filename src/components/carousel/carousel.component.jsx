/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import SlideJob from './slide/slide-job.component';
import SlideAddress from './slide/slide-address.component';
import SlideFirst from './slide/slide-first.component';

import { NewJobButton, CarouselContainer } from './carousel.styles';
import './carousel-dots.styles.scss';

const CarouselComponent = ({ userJobs, changeCurrentJob, currentJob, user, changeCurrentAddress, currentAddress, isFirstTime }) => {
  const [redirect, setRedirect] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    if (userJobs && userJobs.length) {
      userJobs.forEach((job, idx) => {
        if (job._id === currentJob._id) setSelectedSlide(idx);
      });
    } else if (user.addresses && user.addresses.length) {
      user.addresses.forEach((address, idx) => {
        if (address._id === currentAddress._id) setSelectedSlide(idx);
      });
    }
    return () => setRedirect('');
  }, [redirect, userJobs, user.addresses]);

  const handleSlideChange = (slideIndex) => {
    if (userJobs && userJobs.length) {
      changeCurrentJob(userJobs[slideIndex]._id);
    } else if (user.addresses && user.addresses.length) {
      changeCurrentAddress(user.addresses[slideIndex]._id)
    }
  }

  return (
    <CarouselContainer>
      {redirect ? <Redirect to={redirect} /> : null}
      <Carousel
        afterSlide={slideIndex => handleSlideChange(slideIndex)}
        renderCenterRightControls={() => <button style={{ display: "none" }}></button>}
        renderCenterLeftControls={() => <button style={{ display: "none" }}></button>}
        transitionMode='scroll'
        slideIndex={selectedSlide}
        speed={500}
      >
        {
          userJobs && userJobs.length
            ? userJobs.map(job => <SlideJob onClick={() => console.log('jobs')} key={job._id} job={job} />)
            : user.addresses && user.addresses.length
              ? user.addresses.map(address => <SlideAddress onClick={() => console.log('addresses')} key={address._id} address={address} />)
              : [1, 2, 3].map((slide, idx) => <SlideFirst onClick={() => console.log('first steps')} key={idx} />)
        }
      </Carousel>
      <NewJobButton width='170' height='40' onClick={() => isFirstTime ? setRedirect('/user/new-address/') : setRedirect('/user/new-job/')}>{isFirstTime ? 'start' : 'new job'}</NewJobButton>
    </CarouselContainer >
  );
}

export default CarouselComponent;