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
        // if (number > 0 && number <= 32) {
        //     this.setState({
        //         number: number
        //     });
        // }
        // else if (number > 32 || number < 1) {
        //     this.setState({
        //         number: 32
        //     });
        //     number = 32;
        // } else {
        //     this.setState({
        //         number: NaN
        //     });
        //     number = 1;
        // }

        this.setState({
            number: number
        })


    };

    handleItemClicked = () => {
        let number = this.state.number;
        this.props.updateEvents(undefined, number);
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