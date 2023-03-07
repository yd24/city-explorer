import React from 'react';

class SearchResult extends React.Component {
    buildStaticMapURL = () => {
        let mapData = 'https://maps.locationiq.com/v3/staticmap' + 
        '?key=' + process.env.REACT_APP_LOCATIONIQ_API_KEY + '&center=' +
        this.props.locData.lat + ',' + this.props.locData.lon + '&zoom=12';
        return mapData;
    };

    render() {
        let results;
        if (Object.keys(this.props.locData).length > 0) {
            results = (
                <>
                    <h2>{this.props.locData.display_name}</h2>
                    <img
                        src={this.buildStaticMapURL()}
                        alt={this.props.locData.display_name}
                    />
                    <p>Longitude: {this.props.locData.lon}</p>
                    <p>Latitude: {this.props.locData.lat}</p>
                </>
            );
        } else {
            results = null;
        }
        return results;
    };
}

export default SearchResult;