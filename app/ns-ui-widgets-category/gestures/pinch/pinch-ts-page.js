"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onPinch(args) {
    console.log("scale: " + args.scale);
    console.log("tate: " + args.state);
    console.log("getFocusX(): " + args.getFocusX());
    console.log("getFocusY(): " + args.getFocusY());
}
exports.onPinch = onPinch;
