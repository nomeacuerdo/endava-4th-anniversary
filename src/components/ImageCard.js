import React, { useEffect, useState } from 'react';
import { storage } from '../firebase/firebase';
import Card from '../styled-components/Card';

const ImageCard = ({ uuid, alt }) => {
  const [ src, setSrc ] = useState("");
  const [ hiddenCard, setHiddenCard ] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const ref = storage.ref(`/images/${uuid}`)
    const attempt = (n=0) => {
      ref.getDownloadURL()
        .then(url => {
          !cancelled && setSrc(url);
        }).catch(() => {
          if(n < 3){
            attempt(n+1);
          } else {
            setHiddenCard(true);
          }
        })
    }
    attempt();
    return () => {
      cancelled = true
    }
  },[uuid]);

  return hiddenCard ? null : (
    <Card image>
      { src ? <img src={src} alt={alt}/> : 
        "Loading..."
      }
    </Card>
  );
}

export default ImageCard;
