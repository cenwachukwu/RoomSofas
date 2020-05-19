import React from 'react';
import './carrousel.scss';
import tempPics from '../../components/utils/images/carrousel.jpg';

const Carrousel = () => {
  return (
    <div className="tempCarrouselPic">
      <img title="Cozi" alt="Cozi Sofa" src={tempPics} />
    </div>
  );
};

export default Carrousel;
