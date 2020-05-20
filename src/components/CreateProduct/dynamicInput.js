import React from 'react';
import PropTypes from 'prop-types';

const DynamicInputs = ({ idx, dimension, handleInputChange }) => {
  const product_typeId = `product_type-${idx}`;
  const product_dimensionID = `product_dimension-${idx}`;
  return (
    <ul key={idx}>
      <li>
        <input
          type="text"
          name={product_typeId}
          data-idx={idx}
          id={product_typeId}
          className="product_type"
          value={dimension[idx].name}
          onChange={handleInputChange}
          placeholder="product_type"
        />
      </li>
      <li>
        <input
          type="text"
          name={product_dimensionID}
          data-idx={idx}
          id={product_dimensionID}
          className="product_dimension"
          value={dimension[idx].product_dimension}
          onChange={handleInputChange}
          placeholder="product_dimension"
        />
      </li>
    </ul>
  );
};

DynamicInputs.propTypes = {
  idx: PropTypes.number,
  dimension: PropTypes.array,
  handleInputChange: PropTypes.func,
};

export default DynamicInputs;
