import React, { useState, useEffect } from 'react';
import { database } from '../firebase/firebase';
import IO from '../utils/IO';
import ContentContainer from '../styled-components/ContentContainer';
import Card from '../styled-components/Card';

const db = IO(database);

const Content = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return db("comments")
    .map(raw => raw.toJSON())
    .map(data => data === null ? [] : data)
    .map(Object.entries)
    .map(x => x.map(([,value]) => value.message))
    .map(setMessages)
    .listen()
  })

  return (
    <ContentContainer>
      {!messages.length ?
       "No messages yet..."
      : messages.map((msg,idx) => {
      return <Card key={idx}>{msg}</Card>
      })}
    </ContentContainer>
  );
};

export default Content;
