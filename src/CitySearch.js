import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class CitySearch extends React.Component {
    handleInput = (e) => {
        this.props.setSearchValue(e.target.value);
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let tempLocData = {};
        try {
            let cityData = await axios.get('https://us1.locationiq.com/v1/search', {
                params: {
                    key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
                    q: this.props.searchValue,
                    format: 'json'
                }
            });
            tempLocData = cityData ? cityData.data[0] : { lon: undefined, lat: undefined };
            const city = cityData ? cityData.data[0] : {};
            this.props.setLocData(city);
        } catch (error) {
            this.props.setError(error);
        }

        try {
            let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {
                params: {
                    longitude: tempLocData.lon,
                    latitude: tempLocData.lat
                }
            });
            const weather = weatherData ? weatherData.data : [];
            this.props.setWeatherData(weather);
        } catch (error) {
            this.props.setWeatherError(error);
        }

        try {
            let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies`, {
                params: {
                    searchQuery: this.props.searchValue
                }
            });
            const movie = movieData ? movieData.data : [];
            this.props.setMovieData(movie);
        } catch (error) {
            this.props.setMovieError(error);
        }
    };

    render() {
        return(
            <Col sm={6} className="mx-auto">
                <Form aria-label="Search location" onSubmit={this.handleSubmit}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Search for location"
                        onChange={this.handleInput}
                    >
                    </Form.Control>
                    <Button className="mt-4 mb-5 px-5 py-2" variant="outline-light" type="submit">Explore!</Button>
                </Form>
            </Col>
        );
    }
}

export default CitySearch;