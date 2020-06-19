import React, { useState } from 'react';
import { database } from '../firebase/firebase';

import IO from '../utils/IO';
import Column1 from '../styled-components/column1';

const db = IO(database);

const TextSubmit = () => {

  const [ text, setText ] = useState("")
  const handleChange = e => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    db("comments").create({
      message: text
    })
    .then(() => setText(""))
    .catch(console.error)
  }

  return (
    <Column1>
    <form onSubmit={handleSubmit}>
      <h2>Send your message!</h2>
      <textarea placeholder="Enter your message here!" value={text} onChange={handleChange}/>
      <button>Send!</button>
    </form>
    </Column1>
  );
};

export default TextSubmit;
