import { Observable, EventData } from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> search-bar-import
import { SearchBar } from "tns-core-modules/ui/search-bar";
// << search-bar-import
// >> creating-search-bar-code-ts
function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    const searchBar = new SearchBar();
    // set up SearchBar submit event
    searchBar.on(SearchBar.submitEvent, (sbargs: EventData) => {
        console.log("Search for ", (<SearchBar>sbargs.object).text);
        dialogs.alert(`Search for ${(<SearchBar>sbargs.object).text}`)
            .then(() => {
                console.log("Dialog closed!");
            });
    });
    // set up SearchBar clear event
    searchBar.on(SearchBar.clearEvent, () => {
        console.log("Clear");
        dialogs.alert("Clear SearchBar text")
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

exports.onPageLoaded = onPageLoaded;
// << creating-search-bar-code-ts
