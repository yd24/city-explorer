import React from 'react';

class ErrorMssg extends React.Component {
    render() {
        return this.props.error > 0
            ?
            <p>Error Message: {this.props.errorMssg}</p>
            :
            null;
    };
}

export default ErrorMssg;