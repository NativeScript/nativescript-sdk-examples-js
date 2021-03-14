import { Observable, Page, PropertyChangeData } from "@nativescript/core";
// >> segmented-bar-index-change-event-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    // set up the SegmentedBar selected index
    const vm = new Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    // handle selected index change
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "sbSelectedIndex") {
            vm.set("prop", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// << segmented-bar-index-change-event-ts
