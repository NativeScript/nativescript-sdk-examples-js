"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var label_1 = require("tns-core-modules/ui/label");
var frame_1 = require("tns-core-modules/ui/frame");
function onLoaded() {
    var frame = frame_1.getFrameById("my-frame-id");
    frame.navigate({
        create: function () {
            var stack = new stack_layout_1.StackLayout();
            var label = new label_1.Label();
            label.text = "Hello, world!";
            stack.addChild(label);
            var page = new page_1.Page();
            page.content = stack;
            return page;
        }
    });
}
exports.onLoaded = onLoaded;
