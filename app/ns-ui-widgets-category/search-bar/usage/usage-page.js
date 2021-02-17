// >> search-bar-basics-code
import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("sbText", "");

    vm.on(Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            const searchBar = propertyChangeData.object;
            console.log(`Input changed! New value: ${propertyChangeData.value}`);
        }
    });
    page.bindingContext = vm;
}

export function onSubmit(args) {
    const searchBar = args.object;
    console.log(`Searching for ${searchBar.text}`);
}

export function onClear(args) {
    const searchBar = args.object;
    console.log("Clear event raised");
}

// << search-bar-basics-code
