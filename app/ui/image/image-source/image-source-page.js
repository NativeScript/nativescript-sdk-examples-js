const Image = require("ui/image").Image;
const imageSourceModule = require("image-source");

exports.onStackLoaded = function (args) {
    const stack = args.object;
    // >> image-image-source
    const image = new Image();
    const imageSource = imageSourceModule.fromResource("logo");
    image.imageSource = imageSource;
    image.height = 300;
    image.stretch = "aspectFill";
    // << image-image-source

    const imageFromBase64 = new Image();
    const myImageSource = usingBase64Strings();
    imageFromBase64.imageSource = myImageSource;
    imageFromBase64.height = 150;
    imageFromBase64.stretch = "aspectFit";

    stack.addChild(image);
    stack.addChild(imageFromBase64);
};

function usingBase64Strings() {
    // >> using-base64-strings
    // const imageSourceModule = require("image-source");
    const myImageSource = imageSourceModule.fromFile("~/images/logo.png");
    const imageAsBase64String = myImageSource.toBase64String("png"); // base64 string; default max image quality;
    const base64ImageSource = imageSourceModule.fromBase64(imageAsBase64String);
    // << using-base64-strings

    return base64ImageSource;
}
