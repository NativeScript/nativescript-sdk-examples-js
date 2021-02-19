import { Dialogs, EventData, Observable, Page, StackLayout } from "@nativescript/core";
// >> search-bar-import
import { SearchBar } from "@nativescript/core";
// << search-bar-import
// >> creating-search-bar-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    const searchBar = new SearchBar();
    // set up SearchBar submit event
    searchBar.on(SearchBar.submitEvent, (sbargs: EventData) => {
        console.log("Search for ", (<SearchBar>sbargs.object).text);
        Dialogs.alert(`Search for ${(<SearchBar>sbargs.object).text}`)
            .then(() => {
                console.log("Dialog closed!");
            });
    });
    // set up SearchBar clear event
    searchBar.on(SearchBar.clearEvent, () => {
        console.log("Clear");
        Dialogs.alert("Clear SearchBar text")
            .then(() => {
                console.log("Dialog closed!");
            });
    });

    searchBar.on("textChange", (sbargs) => {
        vm.set("sbResult", (<SearchBar>sbargs.object).text);
    });


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}

// << creating-search-bar-code-ts
