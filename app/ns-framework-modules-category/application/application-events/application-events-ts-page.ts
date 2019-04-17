// >> application-import-ts
import * as applicationModule from "tns-core-modules/application";
// << application-import-ts
import { Observable } from "tns-core-modules/data/observable";
import * as enums from "tns-core-modules/ui/enums";
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
    if (applicationModule.android) {
        const activity = applicationModule.android.foregroundActivity;
        const orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set(
            "orientation",
            orientationEnum === 1
                ? enums.DeviceOrientation.portrait
                : enums.DeviceOrientation.landscape
        );
        vm.set("resumeEvent", "");
        vm.set("resumeEvent", "");
        vm.set("launchEvent", "");
        vm.set("displayedEvent", "");
    } else if (applicationModule.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = navigatedData.context.title;
};

export const onGridLoaded = (eventData) => {
    // >> application-events-ts
    launchListener = (args) => {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    };
    applicationModule.on(applicationModule.launchEvent, launchListener);

    suspendListener = (args) => {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    };
    applicationModule.on(applicationModule.suspendEvent, suspendListener);

    resumeListener = (args) => {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    };
    applicationModule.on(applicationModule.resumeEvent, resumeListener);

    exitListener = (args) => {
        console.log("The appication was closed!");
    };
    applicationModule.on(applicationModule.exitEvent, exitListener);

    displayedListener = applicationModule.on(applicationModule.displayedEvent, (args) => {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    });
    lowMemoryListener = (args) => {
        // the instance that has raidsed the event
        console.log("Instance: ", args.object);
    };
    applicationModule.on(applicationModule.lowMemoryEvent, lowMemoryListener);

    orientationChangedListener = (args) => {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    };
    applicationModule.on(applicationModule.orientationChangedEvent, orientationChangedListener);

    uncaughtErrorListener = (args) => {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: ", args.error);
    };
    applicationModule.on(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-ts
};

export const onGridUnloaded = () => {
    // >> application-events-off-ts
    applicationModule.off(applicationModule.launchEvent, launchListener);
    applicationModule.off(applicationModule.resumeEvent, resumeListener);
    applicationModule.off(applicationModule.suspendEvent, suspendListener);
    applicationModule.off(applicationModule.exitEvent, exitListener);
    applicationModule.off(applicationModule.displayedEvent, displayedListener);
    applicationModule.off(applicationModule.lowMemoryEvent, lowMemoryListener);
    applicationModule.off(applicationModule.orientationChangedEvent, orientationChangedListener);
    applicationModule.off(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
    // << application-events-off-ts
};

