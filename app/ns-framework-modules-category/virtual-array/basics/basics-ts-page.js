"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var virtual_array_1 = require("tns-core-modules/data/virtual-array");
function onNavigatingTo(data) {
    var page = data.object;
    var virtualArray = new virtual_array_1.VirtualArray(100);
    virtualArray.loadSize = 15;
    virtualArray.on(virtual_array_1.VirtualArray.itemsLoadingEvent, function (args) {
        var itemsToLoad = [];
        for (var i = 0; i < args.count; i++) {
            itemsToLoad.push(i + args.index);
        }
        virtualArray.load(args.index, itemsToLoad);
    });
    virtualArray.on(virtual_array_1.VirtualArray.changeEvent, function (args) {
        console.log(args.eventName);
        console.log(args.action);
        console.log(args.removed.length);
    });
    page.bindingContext = { items: virtualArray };
}
exports.onNavigatingTo = onNavigatingTo;
