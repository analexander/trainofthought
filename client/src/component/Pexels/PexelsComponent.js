import React from 'react';
import Pexels from '../../utils/Pexels';
import PhotoListComponent from '../PhotoComponent/PhotoListComponent';

class PexelsComponent extends React.Component {
    state = { photos: [] };

        onload = async (query) => {
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

export default PexelsComponent;