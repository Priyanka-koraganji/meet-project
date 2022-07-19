import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render textbox element',()=>{
        expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1)
    });
    test('render textbox input correctly',()=>{
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(number)
    });
    test('change state when textbox input changes',()=>{
        NumberOfEventsWrapper.setState({
            number:32
        })
        const eventObj = {target:{value:22}};
        NumberOfEventsWrapper.find('.number-of-events').simulate('change',eventObj);
        expect(NumberOfEventsWrapper.state('number')).toBe(22)
    })
})