import React from 'react';

class ErrorMssg extends React.Component {
    render() {
        return this.props.error && this.props.errorStatus[0] !== 400
            &&
            <p className="error-mssg">
                Error Message: 
                {this.props.errorStatus[0] === 404 
                ? ' No result found.'
                : this.props.errorMssg}
            </p>
    };
}

export default ErrorMssg;