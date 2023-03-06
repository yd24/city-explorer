import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class CitySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    handleInput = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let cityData = await axios.get('https://us1.locationiq.com/v1/search', {
            params: {
                key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
                q: this.state.searchValue,
                format: 'json'
            }
        });
        console.log(cityData.data[0]);
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