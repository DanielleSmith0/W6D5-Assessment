
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("clicking the Draw button displays the div with id = 'choices'", async () => {
    const draw = await driver.findElement(By.id('draw'));

    await driver.sleep(200);

    await draw.click;

    await driver.sleep(2000);

    const choicesElements = await driver.findElement(By.id('choices'));

    await driver.sleep(2000);

    const isDisplayed = await choicesElements.isDisplayed();

    expect(isDisplayed).toBe(true);
});

test(" clicking an “Add to Duo” button displays the div with id = 'player-duo'", async () => {
    const addToDuo = await driver.findElement(By.className("bot-btn"));

    await driver.sleep(200);

    await addToDuo.click;

    await driver.sleep(2000);

    const playerDuo = await driver.findElement(By.id('player-duo'));

    await driver.sleep(2000);

    const isDisplayed = await playerDuo.isDisplayed();

    expect(isDisplayed).toBe(true);
});