import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);

    });
    test('render correct details', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    })
    test('render correct details', () => {
        expect(EventWrapper.find('.time')).toHaveLength(1);
    })
    test('render correct details', () => {

        expect(EventWrapper.find('.location')).toHaveLength(1);
    })
    test('render correct details', () => {

        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });
    test('user can expand the event to show details', () => {
        EventWrapper.find('.show-details').simulate('click');
        EventWrapper.setState({ Details: true })
        expect(EventWrapper.state('Details')).toBe(true);
        expect(EventWrapper.find('.more-details')).toHaveLength(1);
    });
    test('user can collapse the event to hide details', () => {
        EventWrapper.find('.hide-details').simulate('click');
        EventWrapper.setState({ Details: false });
        expect(EventWrapper.state('Details')).toBe(false);
        expect(EventWrapper.find('.more-details')).toHaveLength(0);
    });

});