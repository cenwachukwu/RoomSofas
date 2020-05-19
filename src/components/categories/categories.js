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
        <Link to="#">
          <img src={data.images[0].image} />
        </Link>
      </div>
      <div className="categoryName">
        <Link to="#">
          <h1>
            Coz - <span>{data.brand[0].productId}</span>{' '}
          </h1>
        </Link>
      </div>
      <div className="categoryPrice">
        <Link to="#">
          <h2>{util.formatCurrency(data.price / 100)}</h2>
        </Link>
      </div>
    </div>
  );
};

export default IndividualCategory;
