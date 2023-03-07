import React from 'react';
import Card from 'react-bootstrap/Card';

class SearchResult extends React.Component {
    buildStaticMapURL = () => {
        let mapData = `https://maps.locationiq.com/v3/staticmap?
        key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&
        center=${this.props.locData.lat},${this.props.locData.lon}&zoom=12`;
        return mapData;
    };

    render() {
        let results;
        if (Object.keys(this.props.locData).length > 0 && !this.props.error) {
            results = (
                <>
                    <Card className="text-center card-width">
                        <Card.Header><h4>{this.props.locData.display_name}</h4></Card.Header>
                        <Card.Img
                            variant="top"
                            className="map-img"
                            src={this.buildStaticMapURL()}
                            alt={this.props.locData.display_name}
                        />
                        <Card.Body>
                            <Card.Text>
                                <strong>Longitude:</strong> {this.props.locData.lon}
                                <br />
                                <strong>Latitude:</strong> {this.props.locData.lat}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </>
            );
        } else {
            results = null;
        }
        return results;
    };
}

export default SearchResult;