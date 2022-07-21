import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('display 32 by default', () => {
        expect(
            NumberOfEventsWrapper.find('.number-of-events').get(0).props.value
        ).toEqual(32);
    });

    test('display 32 if user input is not in range 1-32', () => {
        NumberOfEventsWrapper.find('.number-of-events').simulate(
            'change', {target: { value: 40 }}
        );
        NumberOfEventsWrapper.setState({ number: 32 });
        expect(NumberOfEventsWrapper.state('number')).toEqual(32);
    });
    test('user change number of events', () => {
        NumberOfEventsWrapper.find('.number-of-events').simulate(
            'change', {target: { value: 5 }}
        );
        expect(NumberOfEventsWrapper.state('number')).toEqual(5);
    });

    
    test('change numberOfEvents state when number input changes', () => {
        NumberOfEventsWrapper.setState({ number: 10 });
        NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: { value: 4 } });
        expect(NumberOfEventsWrapper.state('number')).not.toEqual(undefined);
        expect(NumberOfEventsWrapper.state('number')).toEqual(4);
    });
})