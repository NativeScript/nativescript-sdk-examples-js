"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onSwipe(args) {
    alert(args.eventName + " event triggered for " + args.view);
    var direction = args.direction;
    console.log("direction " + direction);
}
exports.onSwipe = onSwipe;
