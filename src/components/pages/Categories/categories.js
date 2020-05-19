import React from 'react';
import './categories.scss';
import IndividualCategory from '../../categories/categories';

const Categories = (props) => {
  //   console.log(props);
  const category = props.category;
  const data = props.ProductData;
  const loading = props.loading;
  const error = props.error;

  return (
    <div className="Categories">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : data ? (
        <div className="CategoriesPageContainer">
          {data.map((product, index) => {
            if (product.category == category) {
              // console.log(product);
              return (
                <div key={index + 0} className="CategoriesPack">
                  <IndividualCategory data={product} />
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

export default Categories;
