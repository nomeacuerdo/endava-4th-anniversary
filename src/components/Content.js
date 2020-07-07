import React, { useState, useEffect } from 'react';
import { database } from '../firebase/firebase';
import IO from '../utils/IO';
import ContentContainer from '../styled-components/ContentContainer';
import Card from '../styled-components/Card';
import ImageCard from './ImageCard';

const db = IO(database);

const Content = () => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   return db("comments")
  //     .map(raw => raw.toJSON())
  //     .map(data => data === null ? [] : data)
  //     .map(Object.entries)
  //     .map(x => x.map(([key, value]) => ({ key, ...value })))
  //     // .map(d => d.reverse())
  //     .map(setMessages)
  //     .listenOnce();
  // },[])

  return (
    <ContentContainer>
      {!messages.length ?
       "No messages yet..."
      : messages.reverse().map(({ key, message, type }) => {
        if(type === 'image') {
          return <ImageCard key={key} uuid={key} alt="image"/>
        }
        if(type === 'img') {
          console.info('Whatcha lookin` for? ', key);
        }
        return <Card key={key}>{message}</Card>
      })}
    </ContentContainer>
  );
};

export default Content;
