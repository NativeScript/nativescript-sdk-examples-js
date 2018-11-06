"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_picker_1 = require("tns-core-modules/ui/list-picker");
function onNavigatingTo(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var listPicker = new list_picker_1.ListPicker();
    listPicker.items = [
        "NativeScript Core - JavaScript",
        "NativeScript Core - TypeScript",
        "NativeScript Angular",
        "NativeScript Vue",
        "NativeScript Code Sharing",
        "NativeScript Sidekick"
    ];
    listPicker.selectedIndex = 1;
    container.addChild(listPicker);
}
exports.onNavigatingTo = onNavigatingTo;
