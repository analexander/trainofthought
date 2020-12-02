import React from 'react';
import PhotoCardComponent from '../PhotoComponent/PhotoCardComponent'

const PexelsList = (props) => {
    const images = props.images.map((image) => {
        return <PhotoCardComponent key={image.id} image={image}/>;
    })
    return <div className="image-list">{images}</div>;
}

export default PexelsList;