import React from 'react';

class ErrorMssg extends React.Component {
    render() {
        return this.props.error > 0
            ?
            <p className="error-mssg">Error Message: {this.props.errorMssg}</p>
            :
            null;
    };
}

export default ErrorMssg;