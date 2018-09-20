const observableModule = require("tns-core-modules/data/observable");
const observableArrayModule = require("tns-core-modules/data/observable-array");
// >> clear-search-bar-submit

const arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];
function onNavigatingTo(args) {
    const page = args.object;
    // set up the ListView items
    const vm = new observableModule.Observable();
    const myItems = new observableArrayModule.ObservableArray(arrayItems);

    vm.set("myItems", myItems);

    page.bindingContext = vm;
}
// search for country
function onSubmit(args) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();

    const myItems = new observableArrayModule.ObservableArray();
    if (searchValue !== "") {
        for (let i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    const page = searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}
// clear SearchBar text and load ListView initial data
function onClear(args) {
    const searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";

    const myItems = new observableArrayModule.ObservableArray();
    arrayItems.forEach((item) => {

        myItems.push(item);

    });

    const page = searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
// << clear-search-bar-submit
