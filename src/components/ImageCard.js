import React, { useEffect, useState } from 'react';
import { storage } from '../firebase/firebase'
import Card from '../styled-components/Card';

const ImageCard = ({ uuid, alt }) => {
    const [ src, setSrc ] = useState("");
    useEffect(() => {
        let cancelled = false;
        const ref = storage.ref(`/images/${uuid}`)
        const attempt = () => {
            ref.getDownloadURL()
            .then(url => {
                !cancelled && setSrc(url);
            }).catch(attempt)
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