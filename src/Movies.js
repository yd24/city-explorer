import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
    render() {
        let movies = this.props.movieData;
        if (movies.length > 20) {
            movies = movies.slice(0, 20);
        }
        return (
            movies.map((movie, idx) => {
                return (
                    <Movie 
                        key={idx}
                        movieData={movie}
                    />
                ); 
            })
        );
    }
}

export default Movies;