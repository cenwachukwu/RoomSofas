import React from 'react';
import PropTypes from 'prop-types';

const DynamicSingleInputs = ({ idx, dimension, handleInputChange, label1, nameKey }) => {
  // const description_features = `descriptionFeatures-${idx}`;
  const keyName = `${nameKey} - ${idx}`;
  return (
    <div key={idx}>
      <li>
        <label htmlFor="text">{label1}</label>
        <input
          type="text"
          name={keyName}
          data-idx={idx}
          id={keyName}
          className={nameKey}
          value={dimension[idx].keyName}
          onChange={handleInputChange}
          placeholder={label1}
        />
      </li>
    </div>
  );
};

DynamicSingleInputs.propTypes = {
  idx: PropTypes.number,
  dimension: PropTypes.array,
  handleInputChange: PropTypes.func,
};

export default DynamicSingleInputs;
