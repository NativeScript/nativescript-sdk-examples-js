const nsAppium = require("nativescript-dev-appium");

let driver;
before("start server", async () => {
    await nsAppium.startServer();
    driver = await nsAppium.createDriver();
});

after("stop server", async () => {
    await driver.quit();
    await nsAppium.stopServer();
});
