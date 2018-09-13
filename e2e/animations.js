const nsAppium = require("nativescript-dev-appium");
const examples = require("./examples");
const chai = require("chai");

describe("animations scenarios", () => {
    const animationsExamples = examples.examples.animations;
    let driver;
    let index = 0;
    let example;

    before(async () => {
        driver = await nsAppium.createDriver();
        const mainPageBtn = await driver.findElementByText(animationsExamples.baseExampleName);
        await mainPageBtn.click();
    });

    beforeEach(async () => {
        example = animationsExamples.examples[index];
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

    it(`Animated Properties - check if btn is moved`, async () => {
        const actionBar = await driver.findElementByText("Animating Multiple Properties", "contains");
        chai.assert.isTrue(await actionBar.isDisplayed(), "Action is not available!");

        let nativescriptBtn = driver.findElementByText("NativeScript");
        const initPoint = await (await nativescriptBtn).location();
        const bntAnimate = await driver.findElementByText("Animate", "contains");
        await bntAnimate.click();

        const endPoint = await (await nativescriptBtn).location();
        chai.assert.isTrue(endPoint.y > initPoint.y, `NativeScript button has not moved to bottom!`);
    });

    it("Animated Multiple Views", async () => {
        let elements = ["view1", "view2", "view3", "view4"];

        const mapElements = new Map();
        //skipping label from action bar
        for (let index = 0; index < elements.length; index++) {
            const element = await driver.findElementByAccessibilityId(elements[index]);
            mapElements.set(elements[index], await element.location());
        }

        const animateBtn = await driver.findElementByText("Animate");
        await animateBtn.click();
        const mapElementsNewPostion = new Map();
        for (let index = 0; index < elements.length; index++) {
            const element = await driver.findElementByAccessibilityId(elements[index]);
            mapElementsNewPostion.set(elements[index], await element.location());
        }

        const compareElementsLocation = (intiPositionView, lastPositionView) => {
            const initElementPosiion = mapElements.get(intiPositionView);
            const elementNewPosition = mapElementsNewPostion.get(lastPositionView);
            chai.assert.isTrue(initElementPosiion.x === elementNewPosition.x, `Elements ${intiPositionView} and ${lastPositionView} are not on correct position!`);
            chai.assert.isTrue(initElementPosiion.y === elementNewPosition.y, `Elements ${intiPositionView} and ${lastPositionView} are not on correct position!`);
        }

        compareElementsLocation("view1", "view4");
        compareElementsLocation("view2", "view1");
        compareElementsLocation("view3", "view2");
    });

    //"", "Properties originX and originY"]),
    it("Chained Animations", async () => {
        const nativescriptBtn = await driver.findElementByText("NativeScript");
        chai.assert.isTrue(await nativescriptBtn.isDisplayed(), "NativeScript btn is not visible!");
    });

    it("Properties originX and originY", async () => {
        const myFirstView = driver.findElementByAccessibilityId("myFirstView");
        const mySecondView = driver.findElementByAccessibilityId("mySecondView");
        const myThirdView = driver.findElementByAccessibilityId("myThirdView");
        const myForthView = driver.findElementByAccessibilityId("myForthView");
        const myFifthView = driver.findElementByAccessibilityId("myFifthView");

        const initMyFirstViewLocation = await (await myFirstView); 
        const initMySecondViewLocation = await (await mySecondView); 
        const initMyThirdViewLocation = await (await myThirdView); 
        const initMyForthViewLocation = await (await myForthView); 
        const initMyFifthViewLocation = await (await myFifthView); 

        const animateBtn = await driver.findElementByText("Animate");
        await animateBtn.click();

        const lastMyFirstViewLocation = await (await myFifthView); 
        const lastMySecondViewLocation = await (await myFifthView); 
        const lastMyThirdViewLocation = await (await myFifthView); 
        const lastMyForthViewLocation = await (await myFifthView); 
        const lastMyFifthViewLocation = await (await myFifthView); 

        const compareElementsLocation = (intiPositionView, lastPositionView) => {
            chai.assert.isTrue(intiPositionView.x === lastPositionView.x, `Elements ${intiPositionView} and ${lastPositionView} are not on correct position!`);
            chai.assert.isTrue(intiPositionView.y === lastPositionView.y, `Elements ${intiPositionView} and ${lastPositionView} are not on correct position!`);
        }

        compareElementsLocation(initMyFirstViewLocation, lastMyFirstViewLocation);
        compareElementsLocation(initMySecondViewLocation, lastMySecondViewLocation);
        compareElementsLocation(initMyThirdViewLocation, lastMyThirdViewLocation);
        compareElementsLocation(initMyForthViewLocation, lastMyForthViewLocation);
        compareElementsLocation(initMyFifthViewLocation, lastMyFifthViewLocation);
    });
});