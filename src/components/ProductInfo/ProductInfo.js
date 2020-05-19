import React, { useState } from 'react';
import './ProductInfo.scss';
import util from '../utils/functions/CurrencyFormatter';
import { Link, navigate } from '@reach/router';

const ProductInfo = (props) => {
  const productId = props.data['*'];

  const productData = props.data.ProductData;

  const loading = props.data.loading;

  const error = props.data.error;

  const quantity = [0, 1, 2, 3];

  // Add to cart
  // we want to set a hook to manage the quantity of the products we add to cart
  // we want the default value of everything added to cart to be 1
  const [qty, setQty] = useState(1);
  const handleAddToCart = () => {
    console.log(props);
    navigate('/cart/' + productId + '?qty=' + qty);
  };

  return (
    <div className="ProductInfo">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : productData ? (
        <div className="ProductInfoContainerHolder">
          {productData.map((x, index) => {
            if (x._id === productId) {
              console.log(x);
              return (
                <div key={index + 0} className="ProductInfoContainer">
                  <div className="prod ProductImages">
                    {x.images.map((image, index) => {
                      return (
                        <div key={index + 0}>
                          <img src={image.image} className="img" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="prod ProductText">
                    <div>
                      <h1 className="prodDetail prodName">{x.name}</h1>
                    </div>
                    <div>
                      <h1 className="prodDetail prodPrice">{util.formatCurrency(x.price / 100)}</h1>
                    </div>
                    <div className="quantity">
                      <div className="quantityPTag">
                        <p>Qty:</p>
                      </div>
                      <div className="quantitySelectHolder">
                        <select
                          value={qty}
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                        >
                          {quantity.map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                    <div className="prodDescriptions">
                      <div className="prodDescriptionFeatureHeader">
                        <h2 className="prodDescriptionFeature">Product Descriptions and Features:</h2>
                      </div>

                      <div>
                        {x.description.map((feature, index) => {
                          return (
                            <ul key={index + 0} className="descriptionUl">
                              <li className="descriptionList">{feature.descriptionFeatures}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>

                    <div className="Prodbrand">
                      <div className="ProdbrandName">
                        <h2>Brand:</h2>
                      </div>
                      <div className="ProdbrandInfo">
                        <p>
                          {x.brand[0].brandName} <span>ID: {x.brand[0].productId}</span>
                        </p>
                      </div>
                    </div>

                    <div className="ProdDimenss">
                      <div className="ProdDimenssHeader">
                        <h3>Product dimensions:</h3>
                      </div>

                      {x.dimension.map((dimension, index) => {
                        return (
                          <div className="Prodbrand noBorder" key={index + 0}>
                            <div className="ProddimensionProdtype">
                              <p className="prodDimension">{dimension.product_type}</p>
                            </div>
                            <div className="ProddimensionProddimension">
                              <p>{dimension.product_dimension}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>something is wrong</p>
      )}
    </div>
  );
};

export default ProductInfo;
