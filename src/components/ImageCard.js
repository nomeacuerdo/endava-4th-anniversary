import React, { useEffect, useState } from 'react';
import { storage } from '../firebase/firebase'
import Card from '../styled-components/Card';

const ImageCard = ({ uuid, alt }) => {
    const [ src, setSrc ] = useState("");
    useEffect(() => {
        let cancelled = false;
        const ref = storage.ref(`/images/${uuid}`)
        const attempt = (n=0) => {
            ref.getDownloadURL()
            .then(url => {
                !cancelled && setSrc(url);
            }).catch(() => {
                if(n < 3){
                    attempt(n+1)
                }
            })
        }
        attempt();
        return () => {
            cancelled = true
        }
    },[uuid])
    return (
        <Card image>
            { src ? <img src={src} alt={alt}/> : 
                "Loading..."
            }
        </Card>
    )
}

export default ImageCard