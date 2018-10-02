"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var myItems = new observable_array_1.ObservableArray(arrayItems);
    vm.set("myItems", myItems);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSubmit(args) {
    var searchBar = args.object;
    var searchValue = searchBar.text.toLowerCase();
    var myItems = new observable_array_1.ObservableArray();
    if (searchValue !== "") {
        for (var i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    var page = searchBar.page;
    var vm = page.bindingContext;
    vm.set("myItems", myItems);
}
exports.onSubmit = onSubmit;
function onClear(args) {
    var searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";
    var myItems = new observable_array_1.ObservableArray();
    arrayItems.forEach(function (item) {
        myItems.push(item);
    });
    var page = searchBar.page;
    var vm = page.bindingContext;
    vm.set("myItems", myItems);
}
exports.onClear = onClear;
