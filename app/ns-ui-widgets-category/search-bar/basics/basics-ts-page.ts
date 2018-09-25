import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Page } from "tns-core-modules/ui/page";
import * as dialogs from "tns-core-modules/ui/dialogs";
// >> search-bar-basics-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    // binding SegmentedBar `text` abd `hint` properties
    const vm = new Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    // handle text change event
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

// Handle SearchBar `submit` event.
export function onSubmit(args) {
    const searchbar: SearchBar = <SearchBar>args.object;
    console.log("Search submit result: ", searchbar.text);
    dialogs.alert(`You are searching for ${searchbar.text}`)
        .then(() => {
            console.log("Dialog closed!");
        });
}

// Handle SearchBar `clear` event.
export function onClear() {
    console.log("clear search-bar text");
    dialogs.alert("clear search-bar text")
        .then(() => {
            console.log("Dialog closed!");
        });
}
// << search-bar-basics-code-ts
