const Image = require("tns-core-modules/ui/image").Image;
const GridLayout = require("tns-core-modules/ui/layouts/grid-layout").GridLayout;
function containerLoaded(args) {
    const container = args.object;
    // >> image-icon-fonts-js
    const newImage = new Image();
    const imageString = String.fromCharCode(0xF10B);
    newImage.src = `font://${imageString}`;
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;
    // << image-icon-fonts-js
    container.addChild(newImage);
    GridLayout.setRow(newImage, 3);
    GridLayout.setColumn(newImage, 0);
    GridLayout.setColumnSpan(newImage, 2);
}
exports.containerLoaded = containerLoaded;
