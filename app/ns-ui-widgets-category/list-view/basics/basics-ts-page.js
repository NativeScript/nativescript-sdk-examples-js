"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = observable_1.fromObject({
        myTitles: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onListViewLoaded(args) {
    var listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
function onItemTap(args) {
    var index = args.index;
    console.log("Second ListView item tap " + index);
}
exports.onItemTap = onItemTap;
function onTap(args) {
    var page = args.object.page;
    var listView = page.getViewById("listView");
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
    listView.refresh();
}
exports.onTap = onTap;
