import React, { useState } from 'react';
import './categories.scss';
import { Link } from '@reach/router';
import util from '../utils/functions/CurrencyFormatter';

const IndividualCategory = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="IndividualCategory">
      <div className="categoryImage">
        <Link to={'/product/' + data._id}>
          <img src={data.images[0].image} />
        </Link>
      </div>
      <div className="categoryName">
        <Link to={'/product/' + data._id}>
          <h1>{data.name}</h1>
        </Link>
      </div>
      <div className="categoryPrice">
        <Link to={'/product/' + data._id}>
          <h2>{util.formatCurrency(data.price / 100)}</h2>
        </Link>
      </div>
    </div>
  );
};

export default IndividualCategory;
