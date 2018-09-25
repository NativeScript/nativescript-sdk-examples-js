"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
var search_bar_1 = require("tns-core-modules/ui/search-bar");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("sbResult", "");
    var searchBar = new search_bar_1.SearchBar();
    searchBar.on(search_bar_1.SearchBar.submitEvent, function (sbargs) {
        console.log("Search for ", sbargs.object.text);
        dialogs.alert("Search for " + sbargs.object.text)
            .then(function () {
            console.log("Dialog closed!");
        });
    });
    searchBar.on(search_bar_1.SearchBar.clearEvent, function () {
        console.log("Clear");
        dialogs.alert("Clear SearchBar text")
            .then(function () {
            console.log("Dialog closed!");
        });
    });
    searchBar.on("textChange", function (sbargs) {
        vm.set("sbResult", sbargs.object.text);
    });
    stackLayout.addChild(searchBar);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
