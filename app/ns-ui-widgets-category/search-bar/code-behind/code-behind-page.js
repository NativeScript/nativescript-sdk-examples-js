import { Dialogs, Observable, SearchBar } from "@nativescript/core";
// >> search-bar-require
// << search-bar-require
// >> creating-search-bar-code
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    const searchBar = new SearchBar();
    // set up SearchBar submit event
    searchBar.on(SearchBar.submitEvent, (args) => {
        console.log("Search for ", args.object.text);
        Dialogs.alert(`Search for ${args.object.text}`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
    // set up SearchBar clear event
    searchBar.on(SearchBar.clearEvent, (args) => {
        console.log("Clear");
        Dialogs.alert("Clear SearchBar text")
        .then(() => {
            console.log("Dialog closed!");
        });
    });

    searchBar.on("textChange", (args) => {
        vm.set("sbResult", args.object.text);
    });


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}


// << creating-search-bar-code
