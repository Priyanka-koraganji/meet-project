import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.fontsize = '2rem';
    }
    getStyle = () => {
        return {
            color: this.color,
            fontsize: this.fontsize
        };
    }
}
class OfflineAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
    }
    getStyle = () => {
        return {
            color: this.color
        };
    }
}

export { InfoAlert, ErrorAlert, OfflineAlert };