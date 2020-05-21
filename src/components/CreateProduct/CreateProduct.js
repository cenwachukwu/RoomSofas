import React, { useEffect, useState } from 'react';
import './CreateProduct.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate } from '@reach/router';
import DynamicDoubleInputs from './dynamicInput';
import DynamicSingleInputs from './dynamicSingleInput';
import DynamicFileInputs from './dynamicInputFile';
import { saveProducts } from '../../actions/productActions';

const CreateProduct = (props) => {
  // name
  const [name, setName] = useState('');
  //   brand
  const [brandName, setBrandName] = useState('');
  //  productId
  const [productId, setProductId] = useState('');
  //  price
  const [price, setPrice] = useState('');

  //description
  const blankDescriptionInput = { descriptionFeatures: '' };
  const [description, setDescription] = useState([{ ...blankDescriptionInput }]);
  const addDescription = () => {
    setDescription([...description, { ...blankDescriptionInput }]);
  };
  const handleDescriptionInputChange = (e) => {
    const updatedInput = [...description];
    updatedInput[e.target.dataset.idx][e.target.className] = e.target.value;
    setDescription(updatedInput);
  };

  //   dimension
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

  //   imageFile
  const blankImageInput = { image: '' };
  const [images, setImages] = useState([{ ...blankImageInput }]);
  const addImages = () => {
    setImages([...images, { ...blankImageInput }]);
  };
  const handleFileInputChange = (e) => {
    const updatedInput = [...images];
    // updatedInput[e.target.dataset.idx][e.target.className] = e.target.files[0];
    updatedInput[e.target.dataset.idx][e.target.className] = e.target.value;
    setImages(updatedInput);
  };

  // categories
  const [category, setCategory] = useState('');
  // free shipping
  const [freeShipping, setFreeShipping] = useState(true);
  // soldout
  const [soldOut, setSoldOut] = useState(false);

  //   handleRemoveInput

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      brand: [
        {
          brandName: brandName,
          productId: productId,
        },
      ],
      price: price,
      description: description,
      dimension: dimension,
      images: images,
      category: category,
      isFreeShipping: freeShipping,
      isSoldOut: soldOut,
    };

    dispatch(saveProducts(product));
    console.log(product);
  };

  const productSave = useSelector((state) => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  return (
    <div className="CreateProduct">
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <ul>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
          </li>
          <li>
            <label htmlFor="product_name">Product Name</label>
            <input
              type="text"
              name="text"
              id="product_name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name eg. Coz + Product Id"
            />
          </li>

          <li>
            <label htmlFor="brand_name">Brand name</label>
            <input
              type="text"
              name="text"
              id="brand_name"
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Brand name eg. Signature design by Ashley"
            />
          </li>

          <li>
            <label htmlFor="product_id">Product ID</label>
            <input
              type="text"
              name="text"
              id="product_id"
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Product ID"
            />
          </li>

          <li>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price eg. 12345 no commas please"
            />
          </li>

          {description.map((val, idx) => (
            //   dimension is the state we are changing
            <DynamicSingleInputs
              key={`cat-${idx}`}
              idx={idx}
              dimension={description}
              handleInputChange={handleDescriptionInputChange}
              nameKey="descriptionFeatures"
              label1="Product Description"
            />
          ))}
          <li>
            <input type="button" className="button-primary" value="add new description" onClick={addDescription} />

            {/* <button type="input" className="button-primary" onClick={addDescription}>
              add new description
            </button> */}
          </li>

          {dimension.map((val, idx) => (
            //   dimension is the state we are changing
            <DynamicDoubleInputs
              key={`cat-${idx}`}
              idx={idx}
              dimension={dimension}
              handleInputChange={handleInputChange}
              label1="Product Type"
              label2="Product Dimension"
            />
          ))}
          <li>
            <input type="button" className="button-primary" value="add new dimension" onClick={addDimension} />
          </li>

          {images.map((val, idx) => (
            //   dimension is the state we are changing
            <DynamicSingleInputs
              key={`cat-${idx}`}
              idx={idx}
              dimension={images}
              handleInputChange={handleFileInputChange}
              nameKey="image"
              label1="Image"
            />
          ))}
          <li>
            <input type="button" className="button-primary" value="Add new image" onClick={addImages} />
            {/* <button type="input" className="button-primary" onClick={addImages}>
              Add new image
            </button> */}
          </li>

          <li>
            <div className="selectCategories">
              <div>
                <div>
                  <p>Free Shipping</p>
                </div>
                <select value={freeShipping} onChange={(e) => setFreeShipping(e.target.value)}>
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
              <div>
                <div>
                  <p>Categories</p>
                </div>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="SofaandLoveseat">SofaandLoveseat</option>
                  <option value="Sectionals">Sectionals</option>
                  <option value="Recliner">Recliner</option>
                  <option value="Chair">Chair</option>
                  <option value="AccentChair">AccentChair</option>
                </select>
              </div>
              <div>
                <div>
                  <p>Sold Out</p>
                </div>
                <select value={soldOut} onChange={(e) => setSoldOut(e.target.value)}>
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>
          </li>

          {/* <li className="styleFilePond">
            <FilePond allowMultiple={true}></FilePond>
          </li> */}

          <li className="submitButton">
            <button type="submit">Create Product</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CreateProduct;
