"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gestures_1 = require("tns-core-modules/ui/gestures");
function onTouch(args) {
    console.log(args.eventName + " event triggered for " + args.view);
    var action = args.action;
    switch (action) {
        case gestures_1.TouchAction.cancel:
            console.log("canceled");
            break;
        case gestures_1.TouchAction.down:
            console.log("Down!");
            break;
        case gestures_1.TouchAction.up:
            console.log("Up!");
            break;
        case gestures_1.TouchAction.move:
            console.log("Moving");
            break;
        default:
            break;
    }
    console.log("getX(): ", args.getX());
    console.log("getY(): ", args.getY());
}
exports.onTouch = onTouch;
