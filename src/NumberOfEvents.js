import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    constructor() {
        super();

        this.state = {
            number: 32,
            errorMes: ''
        }
    }
    handleInputChanged = (event) => {
        let number = event.target.value;
        if (number > 0 && number <= 32) {
            this.setState({
                number: number,
                errorMes: ''
            });
        }
        if (number > 32 || number < 1) {
            this.setState({
                number: 32,
                errorMes: 'Enter valid number'
            });
        }
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
                <div>
                    <h2>Number of Events:</h2>
                    <input
                        type="textbox"
                        className="number-of-events"
                        value={this.state.number}
                        onChange={this.handleInputChanged}
                    />
                    <button className='getButton' onClick={this.handleItemClicked}>Get Events</button>
                </div>
                <div className='error-alert'>
                    <ErrorAlert text={this.state.errorMes} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;