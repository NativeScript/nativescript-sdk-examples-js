"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var listArray = new observable_array_1.ObservableArray([
    {
        title: "The Da Vinci Code"
    },
    {
        title: "Harry Potter and the Chamber of Secrets"
    },
    {
        title: "The Alchemist"
    },
    {
        title: "The Godfather"
    },
    {
        title: "Goodnight Moon"
    },
    {
        title: "The Hobbit"
    }
]);
var moreListItems = new observable_array_1.ObservableArray([
    {
        title: "Goosebumps"
    },
    {
        title: "The Lord of the Rings"
    },
    {
        title: "The Ginger Man"
    },
    {
        title: "Harry Potter and the Goblet of Fire"
    },
    {
        title: "Harry Potter and the Order of the Phoenix"
    },
    {
        title: "Harry Potter and the Deathly Hallows"
    }
]);
var loadMore = true;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("listArray", listArray);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onItemTap(args) {
    var index = args.index;
    dialogs_1.alert("ListView item tap " + index).then(function () {
        console.log("Dialog closed!");
    });
}
exports.onItemTap = onItemTap;
function onLoadMoreItems(args) {
    if (loadMore) {
        console.log("ListView -> LoadMoreItemsEvent");
        setTimeout(function () {
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
        }, 3000);
        loadMore = false;
    }
}
exports.onLoadMoreItems = onLoadMoreItems;
