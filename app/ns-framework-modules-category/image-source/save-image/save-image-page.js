import { ImageAsset, ImageSource, Observable, knownFolders, path } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    const folder = knownFolders.currentApp();
    const filePath = path.join(folder.path, "images/logo.png");
    vm.set("imagePath", filePath);
    page.bindingContext = vm;
}


export function makeCopyFromFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    const folder = knownFolders.currentApp();
    const imagePath = path.join(folder.path, "images/logo.png");
    // >> image-source-save-from-file
    const img = ImageSource.fromFileSync(imagePath);
    const folderDest = knownFolders.documents();
    const pathDest = path.join(folderDest.path, "test.png");
    const saved = img.saveToFile(pathDest, "png");
    if (saved) {
        console.log("Image saved successfully!");
        // >> (hide)
        vm.set("imageCopyPath", pathDest);
        // << (hide)
    }
    // << image-source-save-from-file

}
export function makeCopyFromAsset(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const folder = knownFolders.currentApp();
    const pathImage = path.join(folder.path, "images/logo.png");
    const imageAsset = new ImageAsset(pathImage);
    imageAsset.options = {
        width: 100,
        height: 100,
        keepAspectRatio: true
    };
    // >> image-source-save-from-asset
    ImageSource.fromAsset(imageAsset)
    .then((imageSource) => {
        const folder = knownFolders.documents().path;
        const fileName = "test.png";
        const filePath = path.join(folder, fileName);
        const saved = imageSource.saveToFile(filePath, "png");
        if (saved) {
            console.log("Image saved successfully!");
            // >> (hide)
            vm.set("imageAssetCopyPath", filePath);
            // << (hide)
        }
    })
    .catch((e) => {
        console.log("Error: ");
        console.log(e);
    });
    // << image-source-save-from-asset
}

export function makeBase64String(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> image-source-create-base64
    const folder = knownFolders.currentApp();
    const filePath = path.join(folder.path, "images/logo.png");
    const img = ImageSource.fromFileSync(filePath);
    const base64String = img.toBase64String("png");
    // << image-source-create-base64
    vm.set("base64String", base64String);
}
