import React from 'react';
import CitySearch from './CitySearch';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locData: {}
        };
    }

    setLocData = (data) => {
        this.setState({
            locData: data
        });
    };

    displayLonLat = () => {
        if (Object.keys(this.state.locData).length > 0) {
            return (
                <>
                    <p>Longitude: {this.state.locData.lon}</p>
                    <p>Latitude: {this.state.locData.lat}</p>
                </>
            );
        }
    };

    render() {
        return(
            <>
                <CitySearch 
                    setLocData={this.setLocData}
                />
                <h2>{this.state.locData.display_name}</h2>
                {this.displayLonLat()}
            </>
        );
    }
}

export default Main;