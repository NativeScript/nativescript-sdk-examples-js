// >> application-events-import
var applicationModule = require("tns-core-modules/application");
// << application-events-import
var Observable = require("tns-core-modules/data/observable").Observable;
var enums = require("ui/enums");
var vm;
var launchListener, suspendListener, resumeListener, exitListener, displayedListener, lowMemoryListener, orientationChangedListener, uncaughtErrorListener;
function onNavigatingTo(args) {
    var page = args.object;
    vm = new Observable();
    vm.set("actionBarTitle", args.context.actionBarTitle);
    vm.set("info", "Refer to the code-behind files \nfor Application Events snippets");
    if (applicationModule.android) {
        var activity = applicationModule.android.foregroundActivity;
        var orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set("orientation", (orientationEnum === 1 ? enums.DeviceOrientation.portrait : enums.DeviceOrientation.landscape));
    }
    else if (applicationModule.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onGridLoaded(args) {
    // >> application-events
    launchListener = applicationModule.on(applicationModule.launchEvent, function (args) {
        // The root view for this Window on iOS or Activity for Android.
        // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
        console.log("Root View: " + args.root);
        console.log("The appication was launched!");
    });
    suspendListener = applicationModule.on(applicationModule.suspendEvent, function (args) {
        console.log("The appication was suspended!");
    });
    resumeListener = applicationModule.on(applicationModule.resumeEvent, function (args) {
        console.log("The appication was resumed!");
    });
    exitListener = applicationModule.on(applicationModule.exitEvent, function (args) {
        console.log("The appication was closed!");
    });
    displayedListener = applicationModule.on(applicationModule.displayedEvent, function (args) {
        console.log("NativeScript displayedEvent");
    });
    lowMemoryListener = applicationModule.on(applicationModule.lowMemoryEvent, function (args) {
        // the instance that has raidsed the event
        console.log("Instance: " + args.object);
    });
    orientationChangedListener = applicationModule.on(applicationModule.orientationChangedEvent, function (args) {
        // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
        console.log("Orientation: " + args.newValue);
        vm.set("orientation", args.newValue);
    });
    uncaughtErrorListener = applicationModule.on(applicationModule.uncaughtErrorEvent, function (args) {
        // UnhandledErrorEventData.error: NativeScriptError
        console.log("NativeScript Error: " + args.error);
    });
    // << application-events
}
exports.onGridLoaded = onGridLoaded;
function onGridUnloaded() {
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
exports.onGridUnloaded = onGridUnloaded;
