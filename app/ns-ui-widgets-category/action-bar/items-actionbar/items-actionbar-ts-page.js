"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = observable_1.fromObject({
        title: "Items \n\nDemonstrating action items properties and position"
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onShare(args) {
    console.log("Share tapped!");
}
exports.onShare = onShare;
function onDelete(args) {
    console.log("Delete tapped!");
}
exports.onDelete = onDelete;
