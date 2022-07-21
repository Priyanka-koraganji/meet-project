import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <>
        <h2>Events List</h2>
        <ul className="EventList row">
          {events.map(event =>
            <li key={event.id} className="col-4">
              <Event event={event} />
            </li>
          )}
        </ul>
      </>
    );
  }
}
export default EventList;