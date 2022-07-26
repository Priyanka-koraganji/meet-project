import puppeteer from 'puppeteer';
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 200, // slow down by 250ms
            ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });
    afterAll(() => {
        browser.close();
    });
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .more-details');
        expect(eventDetails).toBeNull();

    });
    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details');
        const eventDetails = await page.$('.event .more-details');
        expect(eventDetails).toBeDefined();

    });
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details');
        const eventDetails = await page.$('.event .more-details');
        expect(eventDetails).toBeNull();
    });
});

describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 200, // slow down by 250ms
            ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.App');
    });
    afterAll(() => {
        browser.close();
    });
    test('When user hasnt searched for a city, show upcoming events from all cities', async () => {
        const events = await page.$$('.EventList li');
        expect(events).toHaveLength(mockData.length);
    })
    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('.city', 'London, UK', { delay: 200 });
        let suggestions = await page.$$('.suggestions li');
        expect(suggestions).toHaveLength(2);
    });
    test('User can select a city from the suggested list', async () => {
        await page.$('.suggestions');
        await page.click('.suggestions > li:nth-child(1)');
        let events = mockData.filter(event => { event.location === 'London, UK' })
        expect(events).toBeDefined();
    })
});