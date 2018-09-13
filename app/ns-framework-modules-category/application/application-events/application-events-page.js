// >> application-events-import
const applicationModule = require("tns-core-modules/application");
// << application-events-import
const Observable = require("tns-core-modules/data/observable").Observable;
const enums = require("ui/enums");
let vm;
let launchListener;
let suspendListener;
let resumeListener;
let exitListener;
let displayedListener;
let lowMemoryListener;
let orientationChangedListener;
let uncaughtErrorListener;

const onNavigatingTo = args => {
    const page = args.object;
    vm = new Observable();
    vm.set("actionBarTitle", args.context.actionBarTitle);
    vm.set("info", "Refer to the code-behind files \nfor Application Events snippets");
    if (applicationModule.android) {
        const activity = applicationModule.android.foregroundActivity;
        const orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set("orientation", (orientationEnum === 1 ? enums.DeviceOrientation.portrait : enums.DeviceOrientation.landscape));
        vm.set("resumeEvent", "");
        vm.set("resumeEvent", "");
        vm.set("launchEvent", "");
        vm.set("displayedEvent", "");
    } else if (applicationModule.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
const onGridLoaded = args => {
    // >> application-events
    launchListener = applicationModule.on(applicationModule.launchEvent, (args) => {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    });
    suspendListener = applicationModule.on(applicationModule.suspendEvent, (args) => {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    });
    resumeListener = applicationModule.on(applicationModule.resumeEvent, (args) => {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    });
    exitListener = applicationModule.on(applicationModule.exitEvent, (args) => {
        console.log("The appication was closed!");
    });
    displayedListener = applicationModule.on(applicationModule.displayedEvent, (args) => {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    });
    lowMemoryListener = applicationModule.on(applicationModule.lowMemoryEvent, (args) => {
        // the instance that has raidsed the event
        console.log("Instance: ", args.object);
    });
    orientationChangedListener = applicationModule.on(applicationModule.orientationChangedEvent, (args) => {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    });
    uncaughtErrorListener = applicationModule.on(applicationModule.uncaughtErrorEvent, (args) => {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: ", args.error);
    });
    // << application-events
}

const onGridUnloaded = () => {
    // >> application-events-off
    // import { off as applicationOff } from "tns-core-modules/applicaiton";
    applicationModule.off(applicationModule.launchEvent, launchListener);
    applicationModule.off(applicationModule.resumeEvent, resumeListener);
    applicationModule.off(applicationModule.suspendEvent, suspendListener);
    applicationModule.off(applicationModule.exitEvent, exitListener);
    applicationModule.off(applicationModule.displayedEvent, displayedListener);
    applicationModule.off(applicationModule.lowMemoryEvent, lowMemoryListener);
    applicationModule.off(applicationModule.orientationChangedEvent, orientationChangedListener);
    applicationModule.off(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-off
}

exports.onNavigatingTo = onNavigatingTo;
exports.onGridLoaded = onGridLoaded;
exports.onGridUnloaded = onGridUnloaded;