import React from 'react';
import Carrousel from '../Carrousel/carrousel';
import PillBox from '../HomePagePills/homePagePills';

const Home = (props) => {
  return (
    <div className="Home">
      <Carrousel />
      <PillBox />
    </div>
  );
};

export default Home;
