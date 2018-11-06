"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_view_1 = require("tns-core-modules/ui/list-view");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var label_1 = require("tns-core-modules/ui/label");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var listViewArray = new observable_array_1.ObservableArray([
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
]);
function onNavigatingTo(data) {
    var page = data.object;
    var container = page.getViewById("container");
    var listView = new list_view_1.ListView();
    listView.className = "list-group";
    listView.items = listViewArray;
    listView.on(list_view_1.ListView.itemLoadingEvent, function (args) {
        if (!args.view) {
            args.view = new label_1.Label();
            args.view.className = "list-group-item";
        }
        args.view.text = listViewArray.getItem(args.index).title;
    });
    listView.on(list_view_1.ListView.itemTapEvent, function (args) {
        var tappedItemIndex = args.index;
        var tappedItemView = args.view;
        dialogs_1.alert("Index: " + tappedItemIndex + " View: " + tappedItemView)
            .then(function () {
            console.log("Dialog closed!");
        });
    });
    container.addChild(listView);
}
exports.onNavigatingTo = onNavigatingTo;
