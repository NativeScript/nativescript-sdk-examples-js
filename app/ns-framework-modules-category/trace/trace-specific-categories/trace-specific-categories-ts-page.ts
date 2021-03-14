// tslint:disable:max-line-length
// >> import-trace-module
import { Trace } from "@nativescript/core";
// << import-trace-module
import { Dialogs, Utils } from "@nativescript/core";


export function onNavigatingTo(args) {
    Trace.disable();
    // >> setting-specific-tracing-categories-ts
    Trace.setCategories(Trace.categories.concat(
        Trace.categories.Binding,
        Trace.categories.Layout,
        Trace.categories.Style,
        Trace.categories.ViewHierarchy,
        Trace.categories.VisualTreeEvents
    ));
    Trace.enable();
    // << setting-specific-tracing-categories-ts
    // >> trace-add-categories-ts
    Trace.addCategories(Trace.categories.Navigation);
    // << trace-add-categories-ts
    Utils.setTimeout(() => {
        console.log("-----------------------------------------------------");
        console.log("New trace category has been added");
        console.log("Category: NativeLifecycle");
        console.log("-----------------------------------------------------");
        Dialogs.alert("NativeLifecycle trace category has been added.")
            .then(() => {
                console.log("Dialog closed!");
            });
        Trace.addCategories(Trace.categories.NativeLifecycle);
    }, 2000);

    Trace.write("I (heart) NativeScript!", Trace.categories.Debug);
}

export function checkIsDebugCategorySet() {
    if (Trace.isCategorySet(Trace.categories.Debug)) {
        Dialogs.alert("Debug category has been set")
            .then(() => {
                console.log("Dialog closed!");
            });
    } else {
        Dialogs.alert("Debug category has not been set")
            .then(() => {
                console.log("Dialog closed!");
            });
    }
}

export function checkIsDebugVisualTreeEventsSet() {
    // >> check-iscategoryset-ts
    if (Trace.isCategorySet(Trace.categories.VisualTreeEvents)) {
        Dialogs.alert("VisualTreeEvents category has been set")
            .then(() => {
                console.log("Dialog closed!");
            });
    } else {
        Dialogs.alert("VisualTreeEvents category has not been set")
            .then(() => {
                console.log("Dialog closed!");
            });
    }
    // << check-iscategoryset-ts
}

export function enableTracing() {
    if (Trace.isEnabled() === false) {
        Trace.enable();
        Dialogs.alert("Trace has been enabled")
            .then(() => {
                console.log("Dialog closed!");
            });
    } else {
        Dialogs.alert("Trace has been already enabled")
            .then(() => {
                console.log("Dialog closed!");
            });
    }
}
export function disableTracing() {
    if (Trace.isEnabled()) {
        // >> disable-tracing-ts
        Trace.disable();
        // << disable-tracing-ts
        Dialogs.alert("Trace has been disabled")
            .then(() => {
                console.log("Dialog closed!");
            });
    } else {
        Dialogs.alert("Trace has been already disabled")
            .then(() => {
                console.log("Dialog closed!");
            });
    }
}

