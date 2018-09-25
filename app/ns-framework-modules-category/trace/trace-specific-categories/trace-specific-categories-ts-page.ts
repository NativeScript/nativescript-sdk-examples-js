// tslint:disable:max-line-length
// >> import-trace-module
import { enable, disable, isEnabled, categories, setCategories, addCategories, write, isCategorySet } from "tns-core-modules/trace";
// << import-trace-module
import { setTimeout } from "tns-core-modules/timer";
import * as dialogs from "tns-core-modules/ui/dialogs";
export function onNavigatingTo(args) {
    disable();
    // >> setting-specific-tracing-categories-ts
    setCategories(categories.concat(
        categories.Binding,
        categories.Layout,
        categories.Style,
        categories.ViewHierarchy,
        categories.VisualTreeEvents
    ));
    enable();
    // << setting-specific-tracing-categories-ts
    // >> trace-add-categories-ts
    addCategories(categories.Navigation);
    // << trace-add-categories-ts
    setTimeout(() => {
        console.log("-----------------------------------------------------");
        console.log("New trace category has been added");
        console.log("Category: NativeLifecycle");
        console.log("-----------------------------------------------------");
        dialogs.alert("NativeLifecycle trace category has been added.")
            .then(() => {
                console.log("Dialog closed!");
            });
        addCategories(categories.NativeLifecycle);
    }, 2000);

    write("I (heart) NativeScript!", categories.Debug);
}

export function checkIsDebugCategorySet() {
    if (isCategorySet(categories.Debug)) {
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

export function checkIsDebugVisualTreeEventsSet() {
    // >> check-iscategoryset-ts
    if (isCategorySet(categories.VisualTreeEvents)) {
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
    // << check-iscategoryset-ts
}

export function enableTracing() {
    if (isEnabled() === false) {
        enable();
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
export function disableTracing() {
    if (isEnabled()) {
        // >> disable-tracing-ts
        disable();
        // << disable-tracing-ts
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

