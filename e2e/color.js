const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("button scenarios", () => {
    const color = examples.examples.color;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(color.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = color.examples[index];
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
        await driver.findElementByText("new Color", "contains");
        const result = await driver.compareScreen("color_basics", 10);
        chai.assert.isTrue(result);
    });
});