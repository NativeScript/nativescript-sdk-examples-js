import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Page } from "tns-core-modules/ui/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";
// >> clear-search-bar-submit-ts

const arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    // set up the ListView items
    const vm = new Observable();
    const myItems = new ObservableArray(arrayItems);

    vm.set("myItems", myItems);

    page.bindingContext = vm;
}
// search for country
export function onSubmit(args) {
    const searchBar: SearchBar = <SearchBar>args.object;
    const searchValue = searchBar.text.toLowerCase();

    const myItems = new ObservableArray();
    if (searchValue !== "") {
        for (let i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    const page: Page = <Page>searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}
// clear SearchBar text and load ListView initial data
export function onClear(args) {
    const searchBar: SearchBar = <SearchBar>args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";

    const myItems = new ObservableArray();
    arrayItems.forEach((item) => {

        myItems.push(item);

    });

    const page: Page = <Page>searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}
// << clear-search-bar-submit-ts
