"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var knownColors = require("tns-core-modules/color/known-colors");
function onNavigatedTo(args) {
    var red = new color_1.Color("#FF0000");
    var isRed = red.equals(new color_1.Color("red"));
    console.log("Are both colors identical: ", isRed);
}
exports.onNavigatedTo = onNavigatedTo;
function onLabel1Loaded(args) {
    var label = args.object;
    var color = new color_1.Color("#FF0000");
    label.backgroundColor = color;
}
exports.onLabel1Loaded = onLabel1Loaded;
function onLabel2Loaded(args) {
    var label = args.object;
    var color = new color_1.Color("#F80");
    label.backgroundColor = color;
}
exports.onLabel2Loaded = onLabel2Loaded;
function onLabel3Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(100, 255, 100, 100);
    label.backgroundColor = color;
}
exports.onLabel3Loaded = onLabel3Loaded;
function onLabel4Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(0x64646464);
    label.backgroundColor = color;
}
exports.onLabel4Loaded = onLabel4Loaded;
function onLabel5Loaded(args) {
    var label = args.object;
    var color = new color_1.Color(knownColors.OrangeRed);
    label.backgroundColor = color;
}
exports.onLabel5Loaded = onLabel5Loaded;
