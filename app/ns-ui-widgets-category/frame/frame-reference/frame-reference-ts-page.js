"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var topmostFrame = frame_1.topmost();
var frame_2 = require("tns-core-modules/ui/frame");
var currentFrame = frame_2.getFrameById("root-frame");
function onTap(args) {
    var button = args.object;
    var page = button.page;
    var myFrame = page.frame;
    myFrame.navigate("secondary-page");
}
exports.onTap = onTap;
