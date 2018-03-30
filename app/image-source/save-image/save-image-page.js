const Observable = require("tns-core-modules/data/observable").Observable;
const imageSourceModule = require("tns-core-modules/image-source");
const fileSystemModule = require("tns-core-modules/file-system");
const imageAssetModule = require("tns-core-modules/image-asset");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "images/logo.png");
    vm.set("imagePath", path);
    page.bindingContext = vm;
}


function makeCopyFromFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    const folder = fileSystemModule.knownFolders.currentApp();
    const imagePath = fileSystemModule.path.join(folder.path, "images/logo.png");
    // >> image-source-save-from-file
    const img = imageSourceModule.fromFile(imagePath);
    const folderDest = fileSystemModule.knownFolders.documents();
    const pathDest = fileSystemModule.path.join(folderDest.path, "test.png");
    const saved = img.saveToFile(pathDest, "png");
    if (saved) {
        console.log("Image saved successfully!");
        // >> (hide)
        vm.set("imageCopyPath", pathDest);
        // << (hide)
    }
    // << image-source-save-from-file

}
function makeCopyFromAsset(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const folder = fileSystemModule.knownFolders.currentApp();
    const pathImage = fileSystemModule.path.join(folder.path, "images/logo.png");
    const imageAsset = new imageAssetModule.ImageAsset(pathImage);
    imageAsset.options = {
        width: 100,
        height: 100,
        keepAspectRatio: true
    };
    // >> image-source-save-from-asset
    const source = new imageSourceModule.ImageSource();
    source.fromAsset(imageAsset)
    .then((imageSource) => {
        const folder = fileSystemModule.knownFolders.documents().path;
        const fileName = "test.png";
        const path = fileSystemModule.path.join(folder, fileName);
        const saved = imageSource.saveToFile(path, "png");
        if (saved) {
            console.log("Image saved successfully!");
            // >> (hide)
            vm.set("imageAssetCopyPath", path);
            // << (hide)
        }
    // << image-source-save-from-asset
    })
    .catch((e) => {
        console.log("Error: ");
        console.log(e);
    });
}

function makeBase64String(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> image-source-create-base64
    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "images/logo.png");
    const img = imageSourceModule.fromFile(path);
    const base64String = img.toBase64String("png");
    // << image-source-create-base64
    vm.set("base64String", base64String);
}


exports.onNavigatingTo = onNavigatingTo;
exports.makeCopyFromFile = makeCopyFromFile;
exports.makeCopyFromAsset = makeCopyFromAsset;
exports.makeBase64String = makeBase64String;
