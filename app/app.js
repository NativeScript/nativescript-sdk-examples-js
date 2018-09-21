"use strict";
exports.__esModule = true;
/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
var application = require("tns-core-modules/application");
var platformModule = require("tns-core-modules/platform");
var applicationSettingsModule = require("tns-core-modules/application-settings");
var deepLinkDataModule = require("./shared/deep-link-data");
if (platformModule.isIOS) {
    var mydelegate = require("./delegate/my-delegate");
    application.ios.delegate = mydelegate.MyDelegate;
}
function launchExample() {
    var rootView = application.getRootView();
    if (applicationSettingsModule.hasKey("gotoexample")) {
        var value = applicationSettingsModule.getString("gotoexample");
        if (value !== "") {
            applicationSettingsModule.remove("gotoexample");
            rootView.navigate({
                moduleName: value,
                clearHistory: true
            });
        }
    }
}
application.on(application.resumeEvent, function (args) {
    if (args.android) {
        var dld = new deepLinkDataModule.DeepLinkData("", args.android);
        launchExample();
    }
    else if (args.ios) {
        launchExample();
    }
});
application.run({ moduleName: "app-root" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
