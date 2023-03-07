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