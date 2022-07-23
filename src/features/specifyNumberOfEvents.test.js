import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

defineFeature(feature, test => {
    test('When user hasnt specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;
        given('the user has started a search', () => {
            AppWrapper = mount(<App />);
        });

        when('the users did not specify a number', () => {
            AppWrapper = mount(<App />);
        });

        then('thirtytwo should be the default number', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            expect(
                NumberOfEventsWrapper.find('.number-of-events').get(0).props.value
            ).toEqual(32);
        });
    });
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let NumberOfEventsWrapper;
        let AppWrapper;
        given('the user has started a search', () => {
            AppWrapper = mount(<App />);
        });

        when('the user enters a number into the \'show max\' field', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: { value: 4 } })
        });

        then('the number of listed events should update accordingly', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
            expect(NumberOfEventsWrapper.find('.number-of-events').get(0).props.value).toEqual(4);
            // expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });
});
