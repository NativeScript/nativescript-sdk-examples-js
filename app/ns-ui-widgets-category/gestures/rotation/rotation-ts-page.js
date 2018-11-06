"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onRotation(args) {
    console.log(args.eventName + " event triggered for " + args.view);
    console.log("rotation:  " + args.rotation);
    console.log("state:  " + args.state);
}
exports.onRotation = onRotation;
