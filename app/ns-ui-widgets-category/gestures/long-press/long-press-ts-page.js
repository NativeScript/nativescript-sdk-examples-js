"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onLongPress(args) {
    alert(args.eventName + " gesture event triggered for " + args.view);
}
exports.onLongPress = onLongPress;
