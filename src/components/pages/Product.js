import React from 'react';
import ProductInfo from '../ProductInfo/ProductInfo';

const ProductPage = (props) => {
  console.log(props);
  return (
    <div className="ProductPage">
      <ProductInfo data={props} />
    </div>
  );
};

export default ProductPage;
