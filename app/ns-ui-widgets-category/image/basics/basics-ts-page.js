"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("tns-core-modules/ui/image");
function containerLoaded(args) {
    var container = args.object;
    var newImage = new image_1.Image();
    newImage.src = "res://icon";
    newImage.stretch = "aspectFill";
    container.addChild(newImage);
}
exports.containerLoaded = containerLoaded;
