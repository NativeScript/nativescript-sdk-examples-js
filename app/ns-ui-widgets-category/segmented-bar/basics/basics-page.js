import { Observable } from "@nativescript/core";
// >> segmented-bar-index-change-event
export function onNavigatingTo(args) {
    const page = args.object;
    // set up the SegmentedBar selected index
    const vm = new Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    // handle selected index change
    vm.on(Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbSelectedIndex") {
            vm.set("prop", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}


// << segmented-bar-index-change-event
