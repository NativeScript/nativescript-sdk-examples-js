let observableModule = require("tns-core-modules/data/observable");
let observableArrayModule = require("tns-core-modules/data/observable-array");
// >> clear-search-bar-submit

let arrayItems = [
    { name: "United States"},
    { name: "Bulgaria"},
    { name: "Germany"},
    { name: "Denmark"},
    { name: "India"},
    { name: "Spain"},
    { name: "Italy"}
]
function onNavigatingTo(args) {
    let page = args.object;
    // set up the ListView items
    const vm = new observableModule.Observable();
    let myItems = new observableArrayModule.ObservableArray(arrayItems);

    vm.set("myItems", myItems);

    page.bindingContext = vm;
}
// search for country
function onSubmit(args) {
    let searchBar = args.object;
    let searchValue = searchBar.text.toLowerCase();

    let myItems = new observableArrayModule.ObservableArray();
    if (searchValue !== "") {
        for (let i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    let page = searchBar.page;
    let vm = page.bindingContext;
    vm.set("myItems", myItems);
}
// clear SearchBar text and load ListView initial data
function onClear(args) {
    let searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";

    let myItems = new observableArrayModule.ObservableArray();
    arrayItems.forEach(item => {
        myItems.push(item);
    });

    let page = searchBar.page;
    let vm = page.bindingContext;
    vm.set("myItems", myItems);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// << clear-search-bar-submit