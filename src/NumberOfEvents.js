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
    
    handleItemClicked=()=>{
        let location = undefined;
        let number = this.state.number;
        this.props.updateEvents(location, number);
    }
    
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
        <button onClick={this.handleItemClicked}>Get</button>
            </div>
        );
    }
}

export default NumberOfEvents;