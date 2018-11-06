"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onTap(args) {
    console.log(args.eventName + " event triggered for " + args.view);
    dialogs_1.alert(args.eventName + " event triggered for " + args.view);
}
exports.onTap = onTap;
