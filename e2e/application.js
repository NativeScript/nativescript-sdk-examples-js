const chai = require("chai");
const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");

describe("aplications scenarios", () => {
    const application = examples.examples.application;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(application.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = application.examples[index];
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

    it(`Android Broadcast Receiver Properties`, async () => {
        'Using Android Broadcast Receiver \nto check the battery life'
        const batteryIndicator = await driver.findElementByText("Battery Life: 100%", "contains");
        chai.assert.isTrue(await batteryIndicator.isDisplayed(), "Battery Life is not visible");
    });

    it(`Application Events`, async () => {
        let oriantation = await driver.findElementByText("Portrait", "contains");
        chai.assert.isTrue(await oriantation.isDisplayed(), "Portrait is not visible");

        await driver.setOrientation("LANDSCAPE");
        oriantation = await driver.findElementByText("Landscape", "contains");
        chai.assert.isTrue(await oriantation.isDisplayed(), "LANDSCAPE is not visible");

        await driver.setOrientation("PORTRAIT");
        oriantation = await driver.findElementByText("Portrait", "contains");
        chai.assert.isTrue(await oriantation.isDisplayed(), "Portrait is not visible");

        await driver.backgroundApp(2);
        const suspendSuspendEvent = await driver.findElementByText("The appication was suspended!", "contains");
        chai.assert.isTrue(await suspendSuspendEvent.isDisplayed(), "suspendSuspendEvent is not thrown"); 

        const suspendResumeEvent = await driver.findElementByText("The appication was resumed", "contains");
        chai.assert.isTrue(await suspendResumeEvent.isDisplayed(), "suspendResumeEvent is not thrown"); 
    });

    it(`Check Platform`, async () => {
        const platform = driver.isAndroid ? "Android" : "iOS";
        const batteryIndicator = await driver.findElementByText(`${platform} Applicaiton`, "contains");
        chai.assert.isTrue(await batteryIndicator.isDisplayed(), "Not correct platform!");
    });
});