const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("button scenarios", () => {
    const button = examples.examples.button;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(button.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = button.examples[index];
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

    const findButton = async () => {
        const btn = await driver.findElementByClassName(driver.locators.button);
        return btn;
    }

    it(`Basics`, async () => {
        const btn = await findButton();
        await btn.click();
        await btn.click();
        await btn.click();
        const text = 'TAPPED 3 TIMES';
        const btnText = await btn.text();
        chai.assert.isTrue(text === btnText);
    });

    it(`Code-Behind`, async () => {
        const btn = await findButton();
        await btn.click();
        const text = 'My newly created button';
        const dialog = await driver.findElementByText(text, "contains");
        chai.assert.isTrue(await dialog.isDisplayed());
        await (await driver.findElementByText("OK", "contains")).tapCenter();
        
    });

    it(`Styling`, async () => {
        const btn = await findButton();
        await btn.click();
        await btn.click();
        const text = 'TAP ME!';
        const btnText = await btn.text();
        chai.assert.isTrue(btnText.includes(text));
    });
});