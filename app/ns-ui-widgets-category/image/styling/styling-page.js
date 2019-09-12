// >> image-icon-fonts-js
const Image = require("tns-core-modules/ui/image").Image;
function containerLoaded(args) {
    const container = args.object;
    
    const newImage = new Image();
    const imageString = String.fromCharCode(0xF2b9);
    newImage.src = `font://${imageString}`;
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;
    
    container.addChild(newImage);
}
exports.containerLoaded = containerLoaded;
// << image-icon-fonts-js