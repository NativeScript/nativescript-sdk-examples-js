const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("action bar scenarios", () => {
    const actionBarExmaple = examples.examples.actionBar;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(actionBarExmaple.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = actionBarExmaple.examples[index];
        const btnTap = await driver.findElementByText(example);
        await btnTap.click();
        index++;
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
        await driver.navBack();
    });

    after(async () => {
        await driver.navBack();
    });

    it(`Basics`, async () => {
        const actionBar = await driver.findElementByText(example, "contains");
        chai.assert.isTrue(await actionBar.isDisplayed(), "Action is not available!");

        const msg = `Getting Started \nAction Bar Example`
        const msgContainer = await driver.findElementByText(msg, "contains");
        chai.assert.isTrue(await msgContainer.isDisplayed(), `${msg} is not visible!`);
    });

    it(`Code-Behind`, async () => {
        const actionBar = await driver.findElementByText(`${example} ActionBar`, "contains");
        chai.assert.isTrue(await actionBar.isDisplayed(), "Action is not available!");

        const msg = `Code-behind creation of ActionBar - See the source files for more details`
        const msgContainer = await driver.findElementByText(msg, "contains");
        chai.assert.isTrue(await msgContainer.isDisplayed(), `${msg} is not visible!`);
    });
});