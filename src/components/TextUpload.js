import React, { useState } from 'react';
import { database } from '../firebase/firebase';

import IO from '../utils/IO';
import Column1 from '../styled-components/column1';
import Textarea from '../styled-components/textarea';
import Button from '../styled-components/Button';

const db = IO(database);

const TextSubmit = () => {
  const [ text, setText ] = useState("");
  const handleChange = e => {
    if(e.target.value.length <= 200) {
      setText(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    db("comments").create({
      message: text,
      type: "text",
    })
    .then(() => setText(""))
    .catch(console.error)
  }

  return (
    <Column1 displayCount={text.length > 0}>
    <form onSubmit={handleSubmit}>
      <h2>Send your message!</h2>
      <Textarea placeholder="Enter your message here!" value={text} onChange={handleChange}/>
      <span>{text.length} / 200</span>
      <Button secondary>Submit!</Button>
    </form>
    </Column1>
  );
};

export default TextSubmit;
