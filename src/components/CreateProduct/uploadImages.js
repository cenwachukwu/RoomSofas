import React, { useEffect, useState } from 'react';
import './CreateProduct.scss';

const UploadImage = (props) => {
  const [images, setImages] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'CoziFurnitures');
    setLoading(true);
    const res = await fetch('	https://api.cloudinary.com/v1_1/cenwachukwu/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();

    setImages(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="CreateProduct">
      <ul>
        <li>
          <label htmlFor="text">Upload to cloudnary</label>
          <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage} />
        </li>
      </ul>
      {loading ? <h3>Loading...</h3> : <img src={images} style={{ width: '300px' }} />}
    </div>
  );
};

export default UploadImage;
