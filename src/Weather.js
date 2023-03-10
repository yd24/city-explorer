import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
    render() {
        const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
        const date = new Date(this.props.date);
        return(
            <Card style={{ width: "200px", textAlign: "left" }}>
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>{daysOfWeek[date.getDay()]}</Card.Title>
                    <Card.Subtitle style={{ fontSize: "12px", marginBottom: "1rem" }}>{this.props.date}</Card.Subtitle>
                    <Card.Text>{this.props.descr}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Weather;