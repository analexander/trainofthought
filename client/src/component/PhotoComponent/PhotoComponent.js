import React from 'react';
import Pexels from '../../utils/Pexels'
import PhotoListComponent from './PhotoListComponent';

class PhotoComponent extends React.Component {
    state = { photos: [] };

    getPhotos = async (term) => {
        const response = await Pexels.get(`/v1/search`, {
            params: {
                query: 'motivational-quotes',
                per_page: 1,
                page: 1
            }
        });

        this.setState({ photos: response.data.photos });
    }

    render() {
    return (
    <div className="container" style={{marginTop: '10px'}}>
        <PhotoListComponent images={this.state.photos} />
    </div>
    );
    };
}

export default PhotoComponent;