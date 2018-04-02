const Image = require("tns-core-modules/ui/image").Image;

function onPageLoaded(args) {
    const page = args.pbject;
    const container = page.getViewById("container");
    // >> image-code-behdnd
    const newImage = new Image();
    newImage.src = "res://icon";
    newImage.stretch = "aspectFill";
    // << image-code-behdnd
    container.addChild(newImage);
}
exports.onPageLoaded = onPageLoaded;
