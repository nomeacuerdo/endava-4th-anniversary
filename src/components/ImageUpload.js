import React, { useState } from 'react';

import { storage } from '../firebase/firebase';

import Column2 from '../styled-components/column2';

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState('');

  const handleImage = (e) => {
    const image = e.target.files[0]
    setImageFile(imageFile => (image))
  };

  // if (imageFile) {
    console.log('img', imageFile);
  // }

  return (
    <Column2 display={imageFile}>
      <div className="upload-form">
        <h2>Send an image!</h2>
        <input type="file" id="fail" onChange={handleImage} />
        <label htmlFor="fail">Upload!</label>
      </div>
      <div className="thanks">
        <h2>Thanks for your submission!</h2>
      </div>
    </Column2>
  );
};

export default ImageUpload;
