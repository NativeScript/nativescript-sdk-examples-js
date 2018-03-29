const Observable = require("tns-core-modules/data/observable").Observable;
const appSettings = require("application-settings");
const imageSourceModule = require("tns-core-modules/image-source");
var fileSystemModule = require("tns-core-modules/file-system");
var imageAssetModule = require("tns-core-modules/image-asset");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "images/logo.png");
    vm.set("imagePath", path);
    page.bindingContext = vm;
}


function makeCopyFromFile(args){
    const page = args.object.page;
    const vm = page.bindingContext;

    const folder = fileSystemModule.knownFolders.currentApp();
    const imagePath = fileSystemModule.path.join(folder.path, "images/logo.png");
    // >> image-source-save-from-file
    const img = imageSourceModule.fromFile(imagePath);
    const folderDest = fileSystemModule.knownFolders.documents();
    const pathDest = fileSystemModule.path.join(folderDest.path, "test.png");
    const saved = img.saveToFile(pathDest, "png");
    if(saved){
        console.log("Image saved successfully!");
        // >> (hide)
        vm.set("imageCopyPath", pathDest);
        // << (hide)
    }
    // >> image-source-save-from-file

}
function makeCopyFromAsset(args){
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
    let source = new imageSourceModule.ImageSource();
    source.fromAsset(imageAsset)
    .then((imageSource) => {
        let folder = fileSystemModule.knownFolders.documents().path;
        let fileName = "test.png";
        let path = fileSystemModule.path.join(folder, fileName);
        let saved = imageSource.saveToFile(path, "png");
        if (saved) {
            console.log("Image saved successfully!");
            // >> (hide)
            vm.set("imageAssetCopyPath", path);
            // << (hide)
        }
    // << image-source-save-from-asset
    })
    .catch((e)=>{
        console.log("Error: ");
        console.log(e)
    })
}

function makeBase64String(args){
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> image-source-create-base64
    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "images/logo.png");
    const img = imageSourceModule.fromFile(path);
    let base64String = img.toBase64String("png");
    // << image-source-create-base64
    vm.set("base64String", base64String);
}


exports.onNavigatingTo = onNavigatingTo;
exports.makeCopyFromFile = makeCopyFromFile;
exports.makeCopyFromAsset = makeCopyFromAsset;
exports.makeBase64String = makeBase64String;
