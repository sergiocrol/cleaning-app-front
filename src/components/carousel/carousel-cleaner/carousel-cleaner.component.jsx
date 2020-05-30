import React, { useContext, useState } from 'react';
import Carousel from 'nuka-carousel';

import SlideFirst from '../carousel-user/slide/slide-first.component';
import SlideJobCleaner from './slide/slide-job-cleaner.component';

import { CleanerContext } from '../../../contexts/cleaner-context';

import { JOBS, FIRST_TIME } from '../../../constants/index';

import { CarouselContainer } from '../carousel.styles';
import '../carousel-dots.styles.scss';

const CarouselCleanerComponent = () => {
  const { cleanerStatus, cleanerJobs, jobList } = useContext(CleanerContext);
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <CarouselContainer id='carousel-cleaner' height={cleanerStatus === JOBS ? 230 : 300}>
      <Carousel
        renderCenterRightControls={() => <button style={{ display: "none" }}></button>}
        renderCenterLeftControls={() => <button style={{ display: "none" }}></button>}
        transitionMode='scroll'
        speed={500}
        afterSlide={slideIndex => setSelectedSlide(slideIndex)}
      >
        {
          cleanerStatus === JOBS
            ? cleanerJobs.map((job, idx) => <SlideJobCleaner key={job._id} job={job} selectedJob={idx === selectedSlide} />)
            : cleanerStatus === FIRST_TIME
              ? [1, 2, 3].map((slide, idx) => <SlideFirst onClick={() => console.log('first steps')} key={idx} />)
              : [1, 2, 3].map((slide, idx) => <SlideFirst onClick={() => console.log('first steps')} key={idx} />)
        }
      </Carousel>
    </CarouselContainer>
  );
}

export default CarouselCleanerComponent;