const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("button scenarios", () => {
    const connectivity = examples.examples.connectivity;
    let driver;
    let index = 0;
     let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(connectivity.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = connectivity.examples[index];
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

    it(`Basics`, async () => {
        const connectivity = await driver.findElementByText("Mobile Connectivity!", "contains");
        chai.assert.isTrue(await connectivity.isDisplayed());
    });
});