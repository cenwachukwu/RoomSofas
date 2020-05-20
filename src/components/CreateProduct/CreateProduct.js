import React, { useEffect, useState } from 'react';
import './CreateProduct.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate } from '@reach/router';
import DynamicInputs from './dynamicInput';

const CreateProduct = (props) => {
  const [inputArray, setInputArray] = useState([]);
  const [input, setInput] = useState('');

  const blankDimensionInput = { product_type: '', product_dimension: '' };
  const [dimension, setDimension] = useState([{ ...blankDimensionInput }]);
  const addDimension = () => {
    setDimension([...dimension, { ...blankDimensionInput }]);
  };

  const handleInputChange = (e) => {
    const updatedInput = [...dimension];
    updatedInput[e.target.dataset.idx][e.target.className] = e.target.value;
    setDimension(updatedInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setInputArray((inputArray) => [...inputArray, input]);
    console.log(dimension);
  };

  return (
    <div className="CreateProduct">
      <form onSubmit={submitHandler}>
        <ul>
          {dimension.map((val, idx) => (
            //   dimension is the state we are changing
            <DynamicInputs key={`cat-${idx}`} idx={idx} dimension={dimension} handleInputChange={handleInputChange} />
          ))}
          <li>
            <button type="input" className="button primary" onClick={addDimension}>
              add new text
            </button>
          </li>

          <li>
            <button type="submit" className="button primary">
              Create Product
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CreateProduct;
