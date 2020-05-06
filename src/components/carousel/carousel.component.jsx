import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import Slide from './slide.component';

import { NewJobButton, CarouselContainer } from './carousel.styles';
import './carousel-dots.styles.scss';

const CarouselComponent = ({ userJobs, changeCurrentJob, currentJob }) => {
  const [redirect, setRedirect] = useState(false);
  let selectedSlide = 0;

  if (userJobs && userJobs.length) {
    userJobs.forEach((job, idx) => {
      if (job._id === currentJob._id) selectedSlide = idx;
    });
  }

  useEffect(() => {
    return () => setRedirect(false);
  }, [redirect]);

  const handleSlideChange = (slideIndex) => {
    changeCurrentJob(userJobs[slideIndex]._id);
  }

  return (
    <CarouselContainer>
      {redirect ? <Redirect to={`/user/new-job/`} /> : null}
      <Carousel
        afterSlide={slideIndex => handleSlideChange(slideIndex)}
        renderCenterRightControls={() => <button style={{ display: "none" }}></button>}
        renderCenterLeftControls={() => <button style={{ display: "none" }}></button>}
        transitionMode='fade'
        slideIndex={selectedSlide}
      >
        {
          userJobs && userJobs.length
            ? userJobs.map(job => <Slide onClick={() => console.log('yippie')} key={job._id} job={job} />)
            : <h1>There are no jobs Y_Y</h1>
        }
      </Carousel>
      <NewJobButton width='170' height='40' onClick={() => setRedirect(true)}>new job</NewJobButton>
    </CarouselContainer >
  );
}

export default CarouselComponent;