"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onDoubleTap(args) {
    alert(args.eventName + " event triggered for " + args.view);
}
exports.onDoubleTap = onDoubleTap;
