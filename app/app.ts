/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
import {Application, ApplicationSettings, Frame, isIOS} from "@nativescript/core";
import { DeepLinkData } from "./shared/deep-link-data";

if (isIOS) {
    const mydelegate = require("./delegate/my-delegate");
    Application.ios.delegate = mydelegate.MyDelegate;
}

function launchExample() {
    const rootView: Frame = <Frame> Application.getRootView();
    if (ApplicationSettings.hasKey("gotoexample")) {
        const value = ApplicationSettings.getString("gotoexample");
        if (value !== "") {
            ApplicationSettings.remove("gotoexample");
            rootView.navigate({
                moduleName: value,
                clearHistory: true
            });
        }
    }
}
Application.on(Application.resumeEvent, (args) => {
    if (args.android) {
        const dld = new DeepLinkData("", args.android);
        launchExample();
    } else if (args.ios) {
        launchExample();
    }
});
Application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
