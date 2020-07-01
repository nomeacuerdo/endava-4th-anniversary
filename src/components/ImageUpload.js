import React, { useState } from 'react';
import { storage, database } from '../firebase/firebase';
import IO from '../utils/IO';

import Column2 from '../styled-components/column2';
import Button from '../styled-components/Button';

const db = IO(database);

const UPLOAD = "upload";
const READY = "ready";
const SENT = "sent";

const ImageUpload = () => {
  const [state, setState] = useState(UPLOAD);
  const [imageFile, setImageFile] = useState('');

  const handleImage = (e) => {
    const image = e.target.files[0];
    if(image?.type.startsWith("image")) {
      setImageFile(image)
      setState(READY);
    } else {
      setImageFile("");
    }
  };

  const handleSubmit = () => {
    db("comments").create({
      type: "image",
      message: imageFile.name
    }).then(data => {
      const uuid = data.key;
      return storage.ref(`/images/${uuid}`)
      .put(imageFile);
    }).then(() => {
      setImageFile("");
      setState(SENT);
    })
  }

  const handleReset = () => {
    setImageFile("");
    setState(UPLOAD);
  }

  const Upload = () => (
    <div className="upload-form">
      <h2>Send an image</h2>
      <input type="file" id="fail" onChange={handleImage} />
      <label htmlFor="fail">Upload Here</label>
    </div>
  )

  const Ready = () => (
    <div className="upload-form">
      <h2>Send an image</h2>
      <Button primary onClick={handleSubmit}>Submit :-)</Button>
      <Button secondary onClick={handleReset}>Reset :-(</Button>
    </div>
  )

  const Sent = () => (
    <div className="thanks">
      <h2>Thanks for your submission!</h2>
      <Button primary onClick={handleReset}>Send another :-D</Button>
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
