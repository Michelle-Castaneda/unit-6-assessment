const { Builder, Browser, By, until, } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get('http://localhost:8000');
    await driver.wait(until.titleIs("Duel Duo"), 5000);
  });

  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    let choices = await driver.findElement(By.id("choices"));
    let displayed = await choices.isDisplayed();
    expect(displayed).toBe(true); 
  });

  test("when clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"),5000)
    //to populate the choices div
    let drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    //wait for the bot car to be visible
    await driver.wait(until.elementLocated(By.css('.bot-btn')), 5000);
    // Click the "Add to Duo" button on the first bot card.
    let addDuoButton = await driver.findElement(By.css('.bot-btn'));
    await addDuoButton.click();

    let playerDuoDiv = await driver.findElement(By.id("player-duo"));
    let isPlayerDuoDivDisplayed = await playerDuoDiv.isDisplayed();
    expect(isPlayerDuoDivDisplayed).toBe(true);
  }); 

});

