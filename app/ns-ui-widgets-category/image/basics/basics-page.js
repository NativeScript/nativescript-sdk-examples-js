const Image = require("tns-core-modules/ui/image").Image;

function containerLoaded(args) {
    const container = args.object;
    // >> image-code-behdnd
    const newImage = new Image();
    newImage.src = "res://icon";
    newImage.stretch = "aspectFill";
    // << image-code-behdnd
    container.addChild(newImage);
}
exports.containerLoaded = containerLoaded;
