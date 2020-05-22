import React, { useState } from 'react';
import './carrousel.scss';

// reactStrap
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

// images
// images
import tempPics from '../../components/utils/images/carrousel.jpg';
import loveseat from '../../components/utils/images/homepills/loveseat.jpg';
import sectional from '../../components/utils/images/homepills/sectional.jpg';

const items = [
  {
    src: tempPics,
    altText: 'carrousel',
    caption: ' ',
  },
  {
    src: loveseat,
    altText: 'sectional',
    caption: ' ',
  },
  {
    src: sectional,
    altText: 'LoveSeat',
    caption: ' ',
  },
];

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="tempCarrouselPic">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default Carrousel;
