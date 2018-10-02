"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_source_1 = require("tns-core-modules/image-source");
var image_1 = require("tns-core-modules/ui/image");
var label_1 = require("tns-core-modules/ui/label");
function onStackLoaded(args) {
    var stack = args.object;
    var image = new image_1.Image();
    var imageSource = image_source_1.fromResource("icon");
    image.imageSource = imageSource;
    image.height = 100;
    image.stretch = "aspectFit";
    var lbl = new label_1.Label();
    lbl.text = "Image created via fromResource() method";
    lbl.css = "margin-top: 20; margin-left: 20;";
    var imageFromBase64 = new image_1.Image();
    var myImageSource = usingBase64Strings();
    imageFromBase64.imageSource = myImageSource;
    imageFromBase64.height = 100;
    imageFromBase64.stretch = "aspectFit";
    var lbl2 = new label_1.Label();
    lbl2.text = "Image created via base64 string";
    lbl2.css = "margin-top: 120; margin-left: 20;";
    stack.addChild(lbl);
    stack.addChild(image);
    stack.addChild(lbl2);
    stack.addChild(imageFromBase64);
}
exports.onStackLoaded = onStackLoaded;
function usingBase64Strings() {
    var myImageSource = image_source_1.fromResource("icon");
    var imageAsBase64String = myImageSource.toBase64String("png", 100);
    var base64ImageSource = image_source_1.fromBase64(imageAsBase64String);
    return base64ImageSource;
}
