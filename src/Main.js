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
            errorStatus: [200, 200, 200],
            weatherError: false,
            movieError: false,
            errorMssg:'',
            weatherErrorMssg: '',
            movieErrorMssg: ''
        };
    }

    setLocData = (data) => {
        let status = [...this.state.errorStatus];
        status[0] = 200;
        if (Object.keys(data).length > 0) {
            this.setState({
                locData: data,
                error: false,
                errorMssg: '',
                errorStatus: status
            });
        }
    };

    setSearchValue = (query) => {
        this.setState({
            searchValue: query
        });
    };

    setWeatherData = (data) => {
        let status = [...this.state.errorStatus];
        status[1] = 200;
        this.setState({
            weatherData: data,
            weatherError: false,
            weatherErrorMssg: ''
        });
    };

    setMovieData = (data) => {
        let status = [...this.state.errorStatus];
        status[2] = 200;
        this.setState({
            movieData: data.data,
            movieError: false,
            movieErrorMssg: ''
        });
    }

    setError = (error) => {
        let status = [...this.state.errorStatus];
        status[0] = error.response.status;
        this.setState({
            error: true,
            errorMssg: error.message,
            errorStatus: status
        });
    };

    setWeatherError = (error) => {
        let status = this.state.errorStatus;
        status[1] = error.response.status;
        this.setState({
            weatherError: true,
            weatherErrorMssg: error.message,
            errorStatus: status
        });
    };

    setMovieError = (error) => {
        let status = this.state.errorStatus;
        status[2] = error.response.status;
        this.setState({
            movieError: true,
            movieErrorMssg: error.message,
            errorStatus: status
        });
    }

    render() {
        const forecasts = 
        this.state.weatherData.map((day, idx) => {
            return <Weather 
                key={idx}
                date={day.time}
                descr={day.forecast}
            />;
        });

        const movies = 
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
                    errorStatus={this.state.errorStatus}
                />
                { Object.keys(this.state.locData).length > 0 && !this.state.weatherError 
                    &&
                    ( this.state.weatherData.length > 0
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
                { Object.keys(this.state.locData).length > 0 && this.state.movieData.length > 0
                    &&
                    ( this.state.movieData.length > 0
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
                    errorStatus={this.state.errorStatus}
                />
            </>
        );
    }
}

export default Main;