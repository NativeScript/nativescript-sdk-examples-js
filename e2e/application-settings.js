const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("aplications settings", () => {
    const applicationSettings = examples.examples.applicationSettings;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(applicationSettings.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = applicationSettings.examples[index];
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

    it(`Application settings`, async () => {
        const values = ["isTurnedOn", "true", "username", "NickIliev", "locationX", "54.321", "noSuchKey", "No string value", "noSuchKey", "undefined", "noBoolKey", "false"];

        const elemetns = await driver.findElementsByXPath(`//${driver.locators.listView}//${driver.locators.label}`);
        for (let index = 0; index < values.length; index++) {
            const textView = elemetns[index];
            console.log(await textView.text());
            chai.assert.isTrue((await textView.text()).trim().toLowerCase() === values[index].toLowerCase());
        }
    });
});