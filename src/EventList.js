import React, { Component } from 'react';
import Event from './Event';
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <>
        <h2>Events List</h2>
        <Row>
          <ul className="EventList">
            {events.map(event =>
              <Col md={6} xs={12}>
                <li key={event.id}>
                  <Event event={event} />
                </li>
              </Col>
            )}
          </ul>
        </Row>
      </>
    );
  }
}
export default EventList;