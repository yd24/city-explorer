import React from 'react';
import CitySearch from './CitySearch';
import SearchResult from './SearchResult';
import ErrorMssg from './ErrorMssg';
import WeatherResult from './WeatherResult';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            locData: {},
            weatherData: [],
            error: false,
            weatherError: false,
            errorMssg:'',
            weatherErrorMssg: ''
        };
    }

    setLocData = (data) => {
        this.setState({
            locData: data,
            error: false
        });
    };

    setSearchValue = (query) => {
        this.setState({
            searchValue: query
        });
    };

    setWeatherData = (data) => {
        this.setState({
            weatherData: data
        });
    };

    setError = (error) => {
        this.setState({
            error: true,
            errorMssg: error.message
        });
    };

    resetError = () => {
        this.setState({
            error: false,
            errorMssg:''
        });
    };

    setWeatherError = (error) => {
        this.setState({
            weatherError: true,
            weatherErrorMssg: error.message
        });
    };

    resetWeatherError = () => {
        this.setState({
            weatherError: false,
            weatherErrorMssg:''
        });
    };

    render() {
        const forecasts = !this.state.weatherError 
        && 
        this.state.weatherData.map((day, idx) => {
            return <WeatherResult 
                key={idx}
                date={day.date}
                descr={day.description}
            />;
        });
        return(
            <>
                <CitySearch 
                    setLocData={this.setLocData}
                    setSearchValue={this.setSearchValue}
                    searchValue={this.state.searchValue}
                    setWeatherData={this.setWeatherData}
                    setError={this.setError}
                    setWeatherError={this.setWeatherError}
                    resetError={this.resetError}
                    resetWeatherError={this.resetWeatherError}
                />
                <SearchResult 
                    locData={this.state.locData}
                    error={this.state.error}
                />
                { Object.keys(this.state.locData).length > 0 && !this.state.error
                    &&
                    ( !this.state.weatherError
                    ?
                        <Row className="justify-content-center mt-5">
                            <h3 className="forecast-header">Forecast Data</h3>
                            {forecasts}
                        </Row>
                    :
                        <Row className="justify-content-center mt-5">
                            <Alert variant="warning" style={{maxWidth: "500px", textAlign: "left"}}>
                                <Alert.Heading className="mb-3"><h3>Oh no!</h3></Alert.Heading>
                                <p>
                                    It looks like there's no forecast data for your location yet!
                                    Try again later or check out another location instead.
                                </p>
                                <p style={{ fontSize: "10px" }}>{this.state.weatherErrorMssg}</p>
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