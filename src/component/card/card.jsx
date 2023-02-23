import React, { useState, useEffect } from "react";
import axios from 'axios';

const FLICKR_API = '197728689@N05';

const Card = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await axios.get('https://www.flickr.com/people', {
                params: {
                    method: 'flickr.photos.search',
                    api_key: FLICKR_API,
                    text: props.value,
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 20,
                },
            });
            //console.log(response);
            setImages(result.data.photos.photo)
        };

        fetchImages();
    }, [props.value]);

    return (
        <>
            {images.map(item => (
                <img key={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.title} />
            ))}
        </>
    )
}

export default Card