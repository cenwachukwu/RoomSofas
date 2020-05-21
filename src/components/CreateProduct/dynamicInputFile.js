import React from 'react';
import PropTypes from 'prop-types';

const DynamicFileInputs = ({ idx, dimension, handleInputChange, label1 }) => {
  const image = `image-${idx}`;
  return (
    <div key={idx}>
      <li>
        <label htmlFor="text">{label1}</label>
        <input
          type="file"
          name={image}
          data-idx={idx}
          id={image}
          className="image"
          value={dimension[idx].product_dimension}
          onChange={handleInputChange}
          placeholder={label1}
        />
      </li>
    </div>
  );
};

DynamicFileInputs.propTypes = {
  idx: PropTypes.number,
  dimension: PropTypes.array,
  handleInputChange: PropTypes.func,
};

export default DynamicFileInputs;
