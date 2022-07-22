import React, { Component } from 'react';
import Event from './Event';
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <>
        <h2>Events List</h2>
        <ul className="EventList">
          {events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>
          )}
        </ul>
      </>
    );
  }
}
export default EventList;