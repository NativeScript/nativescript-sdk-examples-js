// >> require-trace-module
const traceModule = require("tns-core-modules/trace");
// << require-trace-module
const timerModule = require("tns-core-modules/timer");
const dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    traceModule.disable();
        // >> setting-specific-tracing-categories
        traceModule.setCategories(traceModule.categories.concat(
            traceModule.categories.Binding,
            traceModule.categories.Layout,
            traceModule.categories.Style,
            traceModule.categories.ViewHierarchy,
            traceModule.categories.VisualTreeEvents
        ));
        traceModule.enable();
        // << setting-specific-tracing-categories
        // >> trace-add-categories
        traceModule.addCategories(traceModule.categories.Navigation);
        // << trace-add-categories
        timerModule.setTimeout(() => {
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: NativeLifecycle");
            console.log("-----------------------------------------------------");
            dialogs.alert("NativeLifecycle trace category has been added.")
            .then(() => {
                console.log("Dialog closed!");
            });
            traceModule.addCategories(traceModule.categories.NativeLifecycle);
        }, 2000);

        traceModule.write("I (heart) NativeScript!", traceModule.categories.Debug);
}

function checkIsDebugCategorySet() {
    if (traceModule.isCategorySet(traceModule.categories.Debug)) {
        dialogs.alert("Debug category has been set")
        .then(() => {
            console.log("Dialog closed!");
        });
    } else {
        dialogs.alert("Debug category has not been set")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}

function checkIsDebugVisualTreeEventsSet() {
    // >> check-iscategoryset
    if (traceModule.isCategorySet(traceModule.categories.VisualTreeEvents)) {
        dialogs.alert("VisualTreeEvents category has been set")
        .then(() => {
            console.log("Dialog closed!");
        });
    } else {
        dialogs.alert("VisualTreeEvents category has not been set")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
    // << check-iscategoryset
}

function enableTracing() {
    if (traceModule.isEnabled() === false) {
        traceModule.enable();
        dialogs.alert("Trace has been enabled")
        .then(() => {
            console.log("Dialog closed!");
        });
    } else {
        dialogs.alert("Trace has been already enabled")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}
function disableTracing() {
    if (traceModule.isEnabled()) {
        // >> disable-tracing
        traceModule.disable();
        // << disable-tracing
        dialogs.alert("Trace has been disabled")
        .then(() => {
            console.log("Dialog closed!");
        });
    } else {
        dialogs.alert("Trace has been already disabled")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.checkIsDebugCategorySet = checkIsDebugCategorySet;
exports.checkIsDebugVisualTreeEventsSet = checkIsDebugVisualTreeEventsSet;
exports.enableTracing = enableTracing;
exports.disableTracing = disableTracing;
