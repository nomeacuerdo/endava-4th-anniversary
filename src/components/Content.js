import React, { useState, useEffect } from 'react';
import { database, storage } from '../firebase/firebase';
import IO from '../utils/IO';
import ContentContainer from '../styled-components/ContentContainer';
import Card from '../styled-components/Card';
import ImageCard from './ImageCard';

const db = IO(database);

const Content = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return db("comments")
    .map(raw => raw.toJSON())
    .map(data => data === null ? [] : data)
    .map(Object.entries)
    .map(x => x.map(([key,value]) => ({ key, ...value })))
    .map(setMessages)
    .listen()
  })

  return (
    <ContentContainer>
      {!messages.length ?
       "No messages yet..."
      : messages.map(({ key, message, type }) => {
        if( type === "image" ){
          return <ImageCard key={key} uuid={key} alt="image"/>
        }
        return <Card key={key}>{message}</Card>
      })}
    </ContentContainer>
  );
};

export default Content;
