import React, { useState, useEffect } from 'react';
import { useInfiniteScroll } from 'react-infinite-scroll-hook';

import { database } from '../firebase/firebase';
import IO from '../utils/IO';
import ContentContainer from '../styled-components/ContentContainer';
import Card from '../styled-components/Card';
import ImageCard from './ImageCard';

const db = IO(database);

const Content = () => {
  const PAGE_SIZE = 19;
  const [messages, setMessages] = useState([]);
  const [nextMessages, setNextMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    if ( messages.length < 1) {
    return db("comments")
      .map(raw => raw.toJSON())
      .map(data => {
        if (data) {
          setLoading(false);
          setHasNextPage(true);
          return data;
        }

        return [];
      })
      .map(Object.entries)
      .map(x => x.map(([key, value]) => ({ key, ...value })))
      .map(data => {
        setMessages(data.reverse().slice(0, PAGE_SIZE));
        setNextMessages(data.slice(PAGE_SIZE));
        return data;
      })
      //.map(setMessages)
      .listenOnce();
    }
  }, [messages]);

  const fetchMoreData = () => {
    setHasNextPage(true);
    setMessages([...messages, ...nextMessages.slice(0, PAGE_SIZE)]);
    setNextMessages(nextMessages.slice(PAGE_SIZE));

    if (nextMessages.length <= PAGE_SIZE && nextMessages.length > 0) {
      setMessages([...messages, ...nextMessages]);
      setNextMessages([]);
      setHasNextPage(false);
    }
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fetchMoreData,
    scrollContainer: "window"
  });

  return (
    <ContentContainer ref={infiniteRef}>
      {!messages.length ?
        "No messages yet..."
        : messages.reverse().map(({ key, message, type }) => {
          if(type === 'image') {
            return <ImageCard key={key} uuid={key} alt="image"/>
          } else if(type === 'img') {
            return null;
          }

          return <Card key={key}>{message}</Card>
        })}
    </ContentContainer>
  );
};

export default Content;
