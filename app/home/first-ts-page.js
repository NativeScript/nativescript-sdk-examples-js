"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
function navigate() {
    var frame = frame_1.getFrameById("my-frame-id");
    frame.navigate("home/second-page");
}
exports.navigate = navigate;
function navigateByModule() {
    var frame = frame_1.getFrameById("my-frame-id");
    var navigationEntry = {
        moduleName: "home/second-page",
        context: { info: "something you want to pass to your page" },
        animated: false
    };
    frame.navigate(navigationEntry);
}
exports.navigateByModule = navigateByModule;
