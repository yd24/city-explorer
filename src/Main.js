import React from 'react';
import CitySearch from './CitySearch';
import SearchResult from './SearchResult';
import ErrorMssg from './ErrorMssg';
import Weather from './Weather';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Movies from './Movies'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            locData: {},
            weatherData: [],
            movieData: [],
            error: false,
            weatherError: false,
            movieError: false,
            errorMssg:'',
            weatherErrorMssg: '',
            movieErrorMssg: ''
        };
    }

    setLocData = (data) => {
        this.setState({
            locData: data,
            error: false,
            errorMssg: ''
        });
    };

    setSearchValue = (query) => {
        this.setState({
            searchValue: query
        });
    };

    setWeatherData = (data) => {
        this.setState({
            weatherData: data,
            weatherError: false,
            weatherErrorMssg: ''
        });
    };

    setMovieData = (data) => {
        this.setState({
            movieData: data,
            movieError: false,
            movieErrorMssg: ''
        });
    }

    setError = (error) => {
        if (error.response.status !== 400) {
            this.setState({
                error: true,
                errorMssg: error.message
            });
        }
    };

    setWeatherError = (error) => {
        this.setState({
            weatherError: true,
            weatherErrorMssg: error.message
        });
    };

    setMovieError = (error) => {
        this.setState({
            movieError: true,
            movieErrorMssg: error.message
        });
    }

    render() {
        const forecasts = !this.state.weatherError 
        && 
        this.state.weatherData.map((day, idx) => {
            return <Weather 
                key={idx}
                date={day.date}
                descr={day.description}
            />;
        });

        const movies = !this.state.movieError
        &&
        <Movies 
            movieData={this.state.movieData}
        />;

        return(
            <>
                <CitySearch 
                    setLocData={this.setLocData}
                    setSearchValue={this.setSearchValue}
                    searchValue={this.state.searchValue}
                    locData={this.state.locData}
                    setWeatherData={this.setWeatherData}
                    setMovieData={this.setMovieData}
                    setError={this.setError}
                    setWeatherError={this.setWeatherError}
                    setMovieError={this.setMovieError}
                />
                <SearchResult 
                    locData={this.state.locData}
                    error={this.state.error}
                />
                { Object.keys(this.state.locData).length > 0 && !this.state.error
                    &&
                    ( !this.state.weatherError && this.state.weatherData.length > 0
                    ?
                        <Row className="justify-content-center mt-5">
                            <h3 className="forecast-header">Forecast Data</h3>
                            <Row className="justify-content-center gap-4">
                                {forecasts}
                            </Row>
                        </Row>
                    :
                        <Row className="justify-content-center mt-5">
                            <Alert variant="warning" style={{maxWidth: "500px", textAlign: "left"}}>
                                <Alert.Heading className="mb-3"><h3>Oh no!</h3></Alert.Heading>
                                <p>
                                    It looks like there's no forecast data for your location yet!
                                    Try again at a later time.
                                </p>
                                <p style={{ fontSize: "10px" }}>{this.state.weatherErrorMssg}</p>
                            </Alert>
                        </Row>
                    )
                }
                { Object.keys(this.state.locData).length > 0 && !this.state.error
                    &&
                    ( !this.state.movieError && this.state.movieData.length > 0
                    ?
                        <Row className="justify-content-center mt-5">
                            <h3 className="forecast-header">Movie Data</h3>
                            <Row className="justify-content-center gap-3">
                                {movies}
                            </Row>
                        </Row>
                    :
                        <Row className="justify-content-center mt-5">
                            <Alert variant="warning" style={{maxWidth: "500px", textAlign: "left"}}>
                                <Alert.Heading className="mb-3"><h3>Oh no!</h3></Alert.Heading>
                                <p>
                                    It looks like there were no movies related to your location!
                                </p>
                                <p style={{ fontSize: "10px" }}>{this.state.movieErrorMssg}</p>
                            </Alert>
                        </Row>
                    )
                }
                <ErrorMssg 
                    error={this.state.error}
                    errorMssg={this.state.errorMssg}
                />
            </>
        );
    }
}

export default Main;