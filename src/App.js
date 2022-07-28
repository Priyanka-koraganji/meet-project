import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      locations: [],
      eventCount: 32,
      defLocation: 'all',
      navigatorMes: ''
    }
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  updateEvents = (location, number) => {
    if (!number) {
      number = this.state.eventCount
    }
    else {
      this.setState({
        eventCount: number
      })
    }
    if (!location) {
      location = this.state.defLocation
    }
    console.log(location, number);
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      locationEvents = locationEvents.slice(0, number);
      console.log(locationEvents);
      this.setState({
        events: locationEvents
      });
    });
  }
  render() {

    return (
      <div className="App">
        <h1>Meet App</h1>
        {navigator.onLine ? '' : <OfflineAlert text='data is cached data' />}

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;