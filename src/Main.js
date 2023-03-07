import React from 'react';
import CitySearch from './CitySearch';
import SearchResult from './SearchResult';
import ErrorMssg from './ErrorMssg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            locData: {},
            error: false,
            errorMssg:''
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

    setError = (error) => {
        this.setState({
            error: true,
            errorMssg: error.message
        });
    };

    render() {
        return(
            <>
                <CitySearch 
                    setLocData={this.setLocData}
                    setSearchValue={this.setSearchValue}
                    searchValue={this.state.searchValue}
                    setError={this.setError}
                />
                <SearchResult 
                    locData={this.state.locData}
                />
                <ErrorMssg 
                    error={this.state.error}
                    errorMssg={this.state.errorMssg}
                />
            </>
        );
    }
}

export default Main;