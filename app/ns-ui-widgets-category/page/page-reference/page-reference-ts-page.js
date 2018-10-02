"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onPageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    console.log("Page reference from loaded event: ", page);
}
exports.onPageLoaded = onPageLoaded;
function onNavigatedTo(args) {
    console.log("Page navigatedTo");
    var page = args.object;
    console.log("Page reference from navigatedTo event: ", page);
}
exports.onNavigatedTo = onNavigatedTo;
function onStackLoaded(args) {
    console.log("Root StackLayout loaded");
    var stack = args.object;
    var page = stack.page;
    console.log("Page reference from page child element: ", page);
}
exports.onStackLoaded = onStackLoaded;
function onButtonTapped(args) {
    console.log("Button tap");
    var button = args.object;
    var page = button.page;
    console.log("Page reference from button tap event: ", page);
}
exports.onButtonTapped = onButtonTapped;
var frame_1 = require("tns-core-modules/ui/frame");
function onNavigatingTo(args) {
    console.log("Page navigatingTo");
    var rootFrame = frame_1.getFrameById("root-frame");
    var page = rootFrame.currentPage;
    console.log("Page reference from currentPage property of Frame: ", page);
}
exports.onNavigatingTo = onNavigatingTo;
