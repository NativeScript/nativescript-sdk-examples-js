const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("activity indicator scenarios", () => {
    const activityIndicator = examples.examples.activityIndicator;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(activityIndicator.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = activityIndicator.examples[index];
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
    })

    const findActivityIndicator = async () => {
        const test = driver.locators.activityIndicator || driver.locators.activityindicator;
        const act = await driver.findElementByClassName(test);
        return act;
    }

    it(`Basics`, async () => {
        const activityIndicatorElement = await findActivityIndicator();
        chai.assert.isTrue(await activityIndicatorElement.isDisplayed(), `ActivitiIndicator is not visible!`);
    });

    it(`Code-Behind`, async () => {
        const activityIndicatorElement = await findActivityIndicator();
        chai.assert.isTrue(await activityIndicatorElement.isDisplayed(), `ActivitiIndicator is not visible!`);
    });

    it(`Styling`, async () => {
        const activityIndicatorElement = await findActivityIndicator();
        chai.assert.isTrue(await activityIndicatorElement.isDisplayed(), `ActivitiIndicator is not visible!`);
    });
});