import React from 'react';

class WeatherResult extends React.Component {
    render() {
        console.log(this.props.date);
        return(
            <>
            <p>{this.props.date}</p>
            <p>{this.props.description}</p>
            </>
        );
    }
}

export default WeatherResult;