"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tab_view_1 = require("tns-core-modules/ui/tab-view");
var dialogs = require("tns-core-modules/ui/dialogs");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var label_1 = require("tns-core-modules/ui/label");
function onLoaded(args) {
    var stackLayout = args.object;
    var stackLayout0 = new stack_layout_1.StackLayout();
    var label0 = new label_1.Label();
    label0.text = "Tab 0";
    stackLayout0.addChild(label0);
    var stackLayout1 = new stack_layout_1.StackLayout();
    var label1 = new label_1.Label();
    label1.text = "Tab 1";
    stackLayout1.addChild(label1);
    var tabViewItem0 = new tab_view_1.TabViewItem();
    tabViewItem0.title = "Tab 0";
    tabViewItem0.view = stackLayout0;
    var tabViewItem1 = new tab_view_1.TabViewItem();
    tabViewItem1.title = "Tab 1";
    tabViewItem1.view = stackLayout1;
    var tabView = new tab_view_1.TabView();
    var items = [];
    items.push(tabViewItem0);
    items.push(tabViewItem1);
    tabView.items = items;
    tabView.selectedIndex = 1;
    tabView.on(tab_view_1.TabView.selectedIndexChangedEvent, function (argstv) {
        dialogs.alert("Selected index has changed ( Old index: " + argstv.oldIndex + " New index: " + argstv.newIndex + ")")
            .then(function () {
            console.log("Dialog closed!");
        });
    });
    stackLayout.addChild(tabView);
}
exports.onLoaded = onLoaded;
