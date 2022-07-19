import React, { Component } from 'react';

class NumberOfEvents extends Component {
    constructor() {
        super();

        this.state = {
            number: 32
        }
    }
    handleInputChanged = (event) => {
        this.setState({
            number: event.target.value
        });
    };
    render() {
        return (
            <div className="NumberOfEvents">
                <p>Number of Events:</p>
                <input
                    type="textbox"
                    className="number-of-events"
                    value={this.state.number}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;