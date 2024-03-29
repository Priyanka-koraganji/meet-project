import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('user hasnt searched for any city', () => { });

        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('all resulting elements should be collapsed by default', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .more-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {

        let AppWrapper;
        given('the user has started a search', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });
        when('the user clicks on the \'show details\' button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .show-details').at(0).simulate('click');
        });

        then('the user should see the details', () => {
            expect(AppWrapper.find('.event .more-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has opened an events\' details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .show-details').at(0).simulate('click');
        });

        when('the user clicks the \'hide details\' button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .hide-details').at(0).simulate('click');
        });

        then('events\' details should collapse', () => {
            expect(AppWrapper.find('.event .more-details')).toHaveLength(0);
        });
    });
});