import React, { Component } from 'react';

class NumberOfEvents extends Component {
    constructor() {
        super();

        this.state = {
            number: 32
        }
    }
    handleInputChanged = (event) => {
        let number = event.target.value;
        this.setState({
            number: number
        });
    };

    handleItemClicked = () => {
        let location = undefined;
        let number = this.state.number;
        this.props.updateEvents(location, number);
    }

    render() {

        return (
            <div className="NumberOfEvents">
                <h2>Number of Events:</h2>
                <input
                    type="textbox"
                    className="number-of-events"
                    value={this.state.number}
                    onChange={this.handleInputChanged}
                />
                <button className='getButton' onClick={this.handleItemClicked}>Get Events</button>
            </div>
        );
    }
}

export default NumberOfEvents;