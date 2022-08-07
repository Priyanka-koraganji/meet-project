import React, { Component } from 'react';


class Event extends Component {
    constructor() {
        super()
        this.state = {
            Details: false
        }
    }
    detailsButton = (prevState) => {
        this.setState({
            Details: !prevState.Details
        })
    }

    render() {
        const { event } = this.props;
        const { Details } = this.state;
        return (
            <div className='event'>
                <div>

                    <h2 className="summary">{event.summary}</h2>
                    <p className="time">{event.created}</p>
                    <p className="location">{event.location}</p>
                    {
                        Details ?
                            '' : <button variant="warning" className="show-details" onClick={() => this.detailsButton(this.state)}>Show Details</button>
                    }
                </div>
                {
                    Details ?
                        <div className='more-details'>
                            <h2>About Event</h2>
                            <p>{event.description}</p>
                            <button variant="outline-warning" className="hide-details" onClick={() => this.detailsButton(this.state)}>Hide Details</button>
                        </div> : ''
                }

            </div>
        )

    }
}
export default Event;