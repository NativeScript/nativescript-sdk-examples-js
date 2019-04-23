// >> application-import
const applicationModule = require("tns-core-modules/application");
// << application-import
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

const onNavigatingTo = (args) => {
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
};
exports.onNavigatingTo = onNavigatingTo;

const onGridLoaded = (args) => {
    // >> application-events-launch
    launchListener = (args) => {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    };
    applicationModule.on(applicationModule.launchEvent, launchListener);
    // << application-events-launch

    // >> application-events-suspend
    suspendListener = (args) => {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    };
    applicationModule.on(applicationModule.suspendEvent, suspendListener);
    // << application-events-suspend

    // >> application-events-resume
    resumeListener = (args) => {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    };
    applicationModule.on(applicationModule.resumeEvent, resumeListener);
    // << application-events-resume

    // >> application-events-exit
    exitListener = (args) => {
        console.log("The appication was closed!");
    };
    applicationModule.on(applicationModule.exitEvent, exitListener);
    // << application-events-exit

    // >> application-events-displayed
    displayedListener = (args) => {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    };
    applicationModule.on(applicationModule.displayedEvent, displayedListener);
    // << application-events-displayed

    // >> application-events-low-memory
    lowMemoryListener = (args) => {
        // the instance that has raidsed the event
        console.log("Instance: ", args.object);
    };
    applicationModule.on(applicationModule.lowMemoryEvent, lowMemoryListener);
    // << application-events-low-memory

    // >> application-events-orientation
    orientationChangedListener = (args) => {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    };
    applicationModule.on(applicationModule.orientationChangedEvent, orientationChangedListener);
    // << application-events-orientation

    // >> application-events-error
    uncaughtErrorListener = (args) => {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: ", args.error);
    };
    applicationModule.on(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-error
};
exports.onGridLoaded = onGridLoaded;

const onGridUnloaded = () => {
    // >> application-events-off
    applicationModule.off(applicationModule.launchEvent, launchListener);
    applicationModule.off(applicationModule.resumeEvent, resumeListener);
    applicationModule.off(applicationModule.suspendEvent, suspendListener);
    applicationModule.off(applicationModule.exitEvent, exitListener);
    applicationModule.off(applicationModule.displayedEvent, displayedListener);
    applicationModule.off(applicationModule.lowMemoryEvent, lowMemoryListener);
    applicationModule.off(applicationModule.orientationChangedEvent, orientationChangedListener);
    applicationModule.off(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-off
};
exports.onGridUnloaded = onGridUnloaded;
