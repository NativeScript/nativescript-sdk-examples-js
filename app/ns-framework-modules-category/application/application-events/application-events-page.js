// >> application-import
import { Application } from "@nativescript/core";
// << application-import
import { Observable } from "@nativescript/core";
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

export const onNavigatingTo = (args) => {
    const page = args.object;
    vm = new Observable();
    vm.set("actionBarTitle", args.context.actionBarTitle);
    vm.set("info", "Refer to the code-behind files \nfor Application Events snippets");
    if (Application.android) {
        const activity = Application.android.foregroundActivity;
        const orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set("orientation", (orientationEnum === 1 ? enums.DeviceOrientation.portrait : enums.DeviceOrientation.landscape));
        vm.set("resumeEvent", "");
        vm.set("resumeEvent", "");
        vm.set("launchEvent", "");
        vm.set("displayedEvent", "");
    } else if (Application.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
};


export const onGridLoaded = (args) => {
    // >> application-events-launch
    launchListener = (args) => {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    };
    Application.on(Application.launchEvent, launchListener);
    // << application-events-launch

    // >> application-events-suspend
    suspendListener = (args) => {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    };
    Application.on(Application.suspendEvent, suspendListener);
    // << application-events-suspend

    // >> application-events-resume
    resumeListener = (args) => {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    };
    Application.on(Application.resumeEvent, resumeListener);
    // << application-events-resume

    // >> application-events-exit
    exitListener = (args) => {
        console.log("The appication was closed!");
    };
    Application.on(Application.exitEvent, exitListener);
    // << application-events-exit

    // >> application-events-displayed
    displayedListener = (args) => {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    };
    Application.on(Application.displayedEvent, displayedListener);
    // << application-events-displayed

    // >> application-events-low-memory
    lowMemoryListener = (args) => {
        // the instance that has raidsed the event
        console.log("Instance: ", args.object);
    };
    Application.on(Application.lowMemoryEvent, lowMemoryListener);
    // << application-events-low-memory

    // >> application-events-orientation
    orientationChangedListener = (args) => {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    };
    Application.on(Application.orientationChangedEvent, orientationChangedListener);
    // << application-events-orientation

    // >> application-events-error
    uncaughtErrorListener = (args) => {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: ", args.error);
    };
    Application.on(Application.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-error
};

export const onGridUnloaded = () => {
    // >> application-events-off
    Application.off(Application.launchEvent, launchListener);
    Application.off(Application.resumeEvent, resumeListener);
    Application.off(Application.suspendEvent, suspendListener);
    Application.off(Application.exitEvent, exitListener);
    Application.off(Application.displayedEvent, displayedListener);
    Application.off(Application.lowMemoryEvent, lowMemoryListener);
    Application.off(Application.orientationChangedEvent, orientationChangedListener);
    Application.off(Application.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-off
};
