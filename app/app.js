"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
