const imageSourceModule = require("tns-core-modules/image-source");
const Image = require("tns-core-modules/ui/image").Image;
const Label = require("tns-core-modules/ui/label").Label;

exports.onStackLoaded = function (args) {
    const stack = args.object;
    // >> image-image-source
    const image = new Image();
    const imageSource = imageSourceModule.fromResource("icon");
    image.imageSource = imageSource;
    image.height = 100;
    image.stretch = "aspectFit";
    // << image-image-source

    const lbl = new Label();
    lbl.text = "Image created via fromResource() method";
    lbl.css = "margin-top: 20; margin-left: 20;";

    const imageFromBase64 = new Image();
    const myImageSource = usingBase64Strings();
    imageFromBase64.imageSource = myImageSource;
    imageFromBase64.height = 100;
    imageFromBase64.stretch = "aspectFit";

    const lbl2 = new Label();
    lbl2.text = "Image created via base64 string";
    lbl2.css = "margin-top: 120; margin-left: 20;";

    stack.addChild(lbl);
    stack.addChild(image);

    stack.addChild(lbl2);
    stack.addChild(imageFromBase64);
};

function usingBase64Strings() {
    // >> using-base64-strings
    // const imageSourceModule = require("image-source");
    const myImageSource = imageSourceModule.fromResource("icon");
    const imageAsBase64String = myImageSource.toBase64String("png", 100); // base64 string; default max image quality;
    const base64ImageSource = imageSourceModule.fromBase64(imageAsBase64String);
    // << using-base64-strings

    return base64ImageSource;
}
