const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
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
    await driver.findElement(By.xpath("//button[contains(text(), 'Add to Duo')]")).click();
    let addDuo = await driver.findElement(By.id("player-duo"));
    let displayDuo = await addDuo.isDisplayed();
    expect(displayDuo).toBe(true);
  }) 

});