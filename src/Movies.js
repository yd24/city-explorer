import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
    render() {
        let movies = this.props.movieData;
        if (this.props.movieData.length > 20) {
            movies = this.props.movieData.slice(0, 20);
        }
        return (
            movies.map((movie, idx) => {
                return (
                <Card key={idx} style={{maxWidth: "300px", textAlign: "left"}}>
                    <Card.Body>
                        <Card.Title className="mb-4">{movie.title}</Card.Title>
                        <Card.Img style={{maxWidth: "200px"}}variant="top" src={"https://image.tmdb.org/t/p/w200/" + movie.image_url}></Card.Img>
                        <Card.Subtitle className="mt-4 mb-2">Overview</Card.Subtitle>
                        <Card.Text style={{fontSize: "14px"}}>{movie.overview}</Card.Text>
                        <Card.Subtitle className="mt-4 mb-2">Rating</Card.Subtitle>
                        <Card style={{maxWidth:"300px", fontSize: "12px"}}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Average Rating: {movie.average_votes}</ListGroup.Item>
                                <ListGroup.Item>Total Votes: {movie.total_votes}</ListGroup.Item>
                                <ListGroup.Item>Popularity: {movie.popularity}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Card.Body>
                </Card>
                ); 
            })
        );
    }
}

export default Movies;