import React, { useState } from 'react';
import { storage, database } from '../firebase/firebase';
import IO from '../utils/IO';

import Column2 from '../styled-components/column2';

const db = IO(database);

const UPLOAD = "upload";
const READY = "ready";
const SENT = "sent";

const ImageUpload = () => {
  const [state, setState] = useState(UPLOAD)
  const [imageFile, setImageFile] = useState('');

  const handleImage = (e) => {
    const image = e.target.files[0];
    if( image?.type.startsWith("image") ){
      setImageFile(image)
      setState(READY);
    } else {
      setImageFile("")
    }
  };

  const handleSubmit = () => {
    db("comments").create({
      type: "image",
      message: "no message"
    }).then(data => {
      const uuid = data.key;
      return storage.ref(`/images/${uuid}`)
      .put(imageFile)
    }).then(() => {
      setImageFile("")
      setState(SENT)
    })
  }

  const handleReset = () => {
    setImageFile("")
    setState(UPLOAD)
  }

  const Upload = () => (
    <div className="upload-form">
      <h2>Send an image!</h2>
      <input type="file" id="fail" onChange={handleImage} />
      <label htmlFor="fail">Upload!</label>
    </div>
  )

  const Ready = () => (
    <div className="upload-form">
      <h2>Now Just Submit!</h2>
      <button onClick={handleSubmit}>Submit!</button>
      <button onClick={handleReset}>Reset!</button>
    </div>
  )

  const Sent = () => (
    <div className="thanks">
      <h2>Thanks for your submission!</h2>
      <button onClick={handleReset}>Send another one!</button>
    </div>
  )

  return (
    <Column2>
      {{
        [UPLOAD]: <Upload />,
        [READY]: <Ready />,
        [SENT]: <Sent />
      }[state]}
    </Column2>
  );
};

export default ImageUpload;
