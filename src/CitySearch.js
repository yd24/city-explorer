import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class CitySearch extends React.Component {
    handleInput = (e) => {
        this.props.setSearchValue(e.target.value);
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let cityData = await axios.get('https://us1.locationiq.com/v1/search', {
                params: {
                    key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
                    q: this.props.searchValue,
                    format: 'json'
                }
            });
            this.props.setLocData(cityData.data[0]);
        } catch(error) {
            this.props.setError(error);
        }
    };

    render() {
        return(
            <Form aria-label="Search location" onSubmit={this.handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Search for location"
                    onChange={this.handleInput}
                >
                </Form.Control>
                <button type="submit">Explore!</button>
            </Form>
        );
    }
}

export default CitySearch;