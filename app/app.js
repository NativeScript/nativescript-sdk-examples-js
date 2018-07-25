/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
const application = require("application");
const platformModule = require("platform");
const applicationSettingsModule = require("application-settings");
const deepLinkDataModule = require("./shared/deep-link-data");
if (platformModule.isIOS) {
    const mydelegate = require("./delegate/my-delegate");
    application.ios.delegate = mydelegate.MyDelegate;
}

function launchExample() {
    const rootView = application.getRootView();
    if (applicationSettingsModule.hasKey("gotoexample")) {
        const value = applicationSettingsModule.getString("gotoexample");
        if (value !== "") {
            applicationSettingsModule.remove("gotoexample");
            rootView.navigate({
                moduleName:value,
                clearHistory: true
            });
        }
    }
}
application.on(application.resumeEvent, (args) => {
    if (args.android) {
        const dld = new deepLinkDataModule.DeepLinkData("", args.android);
        launchExample();
    } else if (args.ios) {
        launchExample();
    }
});
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
