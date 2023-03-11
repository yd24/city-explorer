import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
    render() {
        return (
            <Card style={{maxWidth: "300px", textAlign: "left"}}>
                <Card.Body>
                    <Card.Title className="mb-4">{this.props.movieData.title}</Card.Title>
                    {this.props.movieData.image_url !== ''
                    ?
                    <Card.Img style={{maxWidth: "200px"}}variant="top" src={"https://image.tmdb.org/t/p/w200/" + this.props.movieData.image_url}></Card.Img>
                    :
                    <Card.Text style={{maxWidth: "150px", backgroundColor: "black", height: "200px", color:"white", alignItems:"center", display: "flex", justifyContent:"center"}}>
                        No Image Found
                    </Card.Text>
                    }
                    <Card.Subtitle className="mt-4 mb-2">Overview</Card.Subtitle>
                    <Card.Text style={{fontSize: "14px"}}>{this.props.movieData.overview}</Card.Text>
                    <Card.Subtitle className="mt-4 mb-2">Release Date</Card.Subtitle>
                    <Card.Text style={{fontSize: "14px"}}>{this.props.movieData.released_on}</Card.Text>
                    <Card.Subtitle className="mt-4 mb-2">Rating</Card.Subtitle>
                    <Card style={{maxWidth:"300px", fontSize: "12px"}}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Average Rating: {this.props.movieData.average_votes}</ListGroup.Item>
                            <ListGroup.Item>Total Votes: {this.props.movieData.total_votes}</ListGroup.Item>
                            <ListGroup.Item>Popularity: {this.props.movieData.popularity}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Card.Body>
            </Card>
        );
    }
}

export default Movie;