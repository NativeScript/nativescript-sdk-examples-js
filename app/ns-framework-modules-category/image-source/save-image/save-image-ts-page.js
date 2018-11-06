"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var image_source_1 = require("tns-core-modules/image-source");
var file_system_1 = require("tns-core-modules/file-system");
var image_asset_1 = require("tns-core-modules/image-asset");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("fps", "0");
    var folder = file_system_1.knownFolders.currentApp();
    var filePath = file_system_1.path.join(folder.path, "images/logo.png");
    vm.set("imagePath", filePath);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function makeCopyFromFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var imagePath = file_system_1.path.join(folder.path, "images/logo.png");
    var img = image_source_1.fromFile(imagePath);
    var folderDest = file_system_1.knownFolders.documents();
    var pathDest = file_system_1.path.join(folderDest.path, "test.png");
    var saved = img.saveToFile(pathDest, "png");
    if (saved) {
        console.log("Image saved successfully!");
        vm.set("imageCopyPath", pathDest);
    }
}
exports.makeCopyFromFile = makeCopyFromFile;
function makeCopyFromAsset(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var pathImage = file_system_1.path.join(folder.path, "images/logo.png");
    var imageAsset = new image_asset_1.ImageAsset(pathImage);
    imageAsset.options = {
        width: 100,
        height: 100,
        keepAspectRatio: true
    };
    var source = new image_source_1.ImageSource();
    source.fromAsset(imageAsset)
        .then(function (imageSource) {
        var folderPath = file_system_1.knownFolders.documents().path;
        var fileName = "test.png";
        var filePath = file_system_1.path.join(folderPath, fileName);
        var saved = imageSource.saveToFile(filePath, "png");
        if (saved) {
            console.log("Image saved successfully!");
            vm.set("imageAssetCopyPath", file_system_1.path);
        }
    })
        .catch(function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.makeCopyFromAsset = makeCopyFromAsset;
function makeBase64String(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var filePath = file_system_1.path.join(folder.path, "images/logo.png");
    var img = image_source_1.fromFile(filePath);
    var base64String = img.toBase64String("png");
    vm.set("base64String", base64String);
}
exports.makeBase64String = makeBase64String;
