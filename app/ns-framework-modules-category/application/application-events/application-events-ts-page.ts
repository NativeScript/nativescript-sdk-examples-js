// >> application-import-ts
import { Application, Enums } from "@nativescript/core";
// << application-import-ts
import { Observable } from "@nativescript/core";
let vm;
let launchListener;
let suspendListener;
let resumeListener;
let exitListener;
let displayedListener;
let lowMemoryListener;
let orientationChangedListener;
let uncaughtErrorListener;

export const onNavigatingTo = (navigatedData) => {
    const page = navigatedData.object;
    vm = new Observable();
    vm.set("actionBarTitle", navigatedData.context.actionBarTitle);
    vm.set("info", "Refer to the code-behind files \nfor Application Events snippets");
    if (Application.android) {
        const activity = Application.android.foregroundActivity;
        const orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set(
            "orientation",
            orientationEnum === 1
                ? Enums.DeviceOrientation.portrait
                : Enums.DeviceOrientation.landscape
        );
        vm.set("resumeEvent", "");
        vm.set("resumeEvent", "");
        vm.set("launchEvent", "");
        vm.set("displayedEvent", "");
    } else if (Application.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = navigatedData.context.title;
};

export const onGridLoaded = (eventData) => {
    // >> application-events-launch-ts
    launchListener = (args) => {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    };
    Application.on(Application.launchEvent, launchListener);
    // << application-events-launch-ts

    // >> application-events-suspend-ts
    suspendListener = (args) => {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    };
    Application.on(Application.suspendEvent, suspendListener);
    // << application-events-suspend-ts

    // >> application-events-resume-ts
    resumeListener = (args) => {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    };
    Application.on(Application.resumeEvent, resumeListener);
    // << application-events-resume-ts

    // >> application-events-exit-ts
    exitListener = (args) => {
        console.log("The appication was closed!");
    };
    Application.on(Application.exitEvent, exitListener);
    // << application-events-exit-ts

    // >> application-events-displayed-ts
    displayedListener = (args) => {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    };
    Application.on(Application.displayedEvent, displayedListener);
    // << application-events-displayed-ts

    // >> application-events-low-memory-ts
    lowMemoryListener = (args) => {
        // the instance that has raidsed the event
        console.log("Instance: ", args.object);
    };
    Application.on(Application.lowMemoryEvent, lowMemoryListener);
    // << application-events-low-memory-ts

    // >> application-events-orientation-ts
    orientationChangedListener = (args) => {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    };
    Application.on(Application.orientationChangedEvent, orientationChangedListener);
    // << application-events-orientation-ts

    // >> application-events-error-ts
    uncaughtErrorListener = (args) => {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: ", args.error);
    };
    Application.on(Application.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-error-ts
};

export const onGridUnloaded = () => {
    // >> application-events-off-ts
    Application.off(Application.launchEvent, launchListener);
    Application.off(Application.resumeEvent, resumeListener);
    Application.off(Application.suspendEvent, suspendListener);
    Application.off(Application.exitEvent, exitListener);
    Application.off(Application.displayedEvent, displayedListener);
    Application.off(Application.lowMemoryEvent, lowMemoryListener);
    Application.off(Application.orientationChangedEvent, orientationChangedListener);
    Application.off(Application.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-off-ts
};

