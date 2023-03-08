import React from 'react';
import CitySearch from './CitySearch';
import SearchResult from './SearchResult';
import ErrorMssg from './ErrorMssg';
import WeatherResult from './WeatherResult';

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

    setWeatherError = (error) => {
        this.setState({
            weatherError: true,
            weatherErrorMssg: error.message
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
                />
                <SearchResult 
                    locData={this.state.locData}
                    error={this.state.error}
                />
                {forecasts}
                <ErrorMssg 
                    error={this.state.error}
                    errorMssg={this.state.errorMssg}
                />
            </>
        );
    }
}

export default Main;