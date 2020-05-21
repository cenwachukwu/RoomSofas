import React from 'react';
import PropTypes from 'prop-types';

const DynamicDoubleInputs = ({ idx, dimension, handleInputChange, label1, label2 }) => {
  const product_typeId = `product_type-${idx}`;
  const product_dimensionID = `product_dimension-${idx}`;
  return (
    <div key={idx}>
      <li>
        <label htmlFor="text">{label1}</label>
        <input
          type="text"
          name={product_typeId}
          data-idx={idx}
          id={product_typeId}
          className="product_type"
          value={dimension[idx].name}
          onChange={handleInputChange}
          placeholder={label1}
        />
      </li>
      <li>
        <label htmlFor="text">{label2}</label>
        <input
          type="text"
          name={product_dimensionID}
          data-idx={idx}
          id={product_dimensionID}
          className="product_dimension"
          value={dimension[idx].product_dimension}
          onChange={handleInputChange}
          placeholder={label2}
        />
      </li>
    </div>
  );
};

DynamicDoubleInputs.propTypes = {
  idx: PropTypes.number,
  dimension: PropTypes.array,
  handleInputChange: PropTypes.func,
};

export default DynamicDoubleInputs;
