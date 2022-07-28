import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';
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
      showWelcomeScreen: undefined
    }
  }
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (number) => {
    let eventCount = this.state.eventCount;
    this.setState({
      eventCount: number
    })
    this.updateEvents(this.state.defLocation, eventCount);
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
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <div className="App">
        <h1>Meet App</h1>
        {navigator.onLine ? '' : <OfflineAlert text='data is cached data' />}

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;