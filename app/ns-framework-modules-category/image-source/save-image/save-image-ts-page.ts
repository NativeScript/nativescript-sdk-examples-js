import { Folder, ImageAsset, ImageSource, knownFolders, Observable, Page, path } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("fps", "0");
    const folder = knownFolders.currentApp();
    const filePath = path.join(folder.path, "images/logo.png");
    vm.set("imagePath", filePath);
    page.bindingContext = vm;
}


export function makeCopyFromFile(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;

    const folder: Folder = <Folder>knownFolders.currentApp();
    const imagePath = path.join(folder.path, "images/logo.png");
    // >> image-source-save-from-file-ts
    const img: ImageSource = <ImageSource> ImageSource.fromFileSync(imagePath);
    const folderDest = knownFolders.documents();
    const pathDest = path.join(folderDest.path, "test.png");
    const saved: boolean = img.saveToFile(pathDest, "png");
    if (saved) {
        console.log("Image saved successfully!");
        // >> (hide)
        vm.set("imageCopyPath", pathDest);
        // << (hide)
    }
    // << image-source-save-from-file-ts

}
export function makeCopyFromAsset(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const folder: Folder = <Folder>knownFolders.currentApp();
    const pathImage = path.join(folder.path, "images/logo.png");
    const imageAsset = new ImageAsset(pathImage);
    imageAsset.options = {
        width: 100,
        height: 100,
        keepAspectRatio: true
    };
    // >> image-source-save-from-asset-ts
    const source = new ImageSource();
    source.fromAsset(imageAsset)
        .then((imageSource: ImageSource) => {
            const folderPath: string = knownFolders.documents().path;
            const fileName = "test.png";
            const filePath = path.join(folderPath, fileName);
            const saved: boolean = imageSource.saveToFile(filePath, "png");
            if (saved) {
                console.log("Image saved successfully!");
                // >> (hide)
                vm.set("imageAssetCopyPath", path);
                // << (hide)
            }
        })
        .catch((e) => {
            console.log("Error: ");
            console.log(e);
        });
        // << image-source-save-from-asset-ts
}

export function makeBase64String(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> image-source-create-base64-ts
    const folder: Folder = <Folder>knownFolders.currentApp();
    const filePath: string = path.join(folder.path, "images/logo.png");
    const img: ImageSource = <ImageSource> ImageSource.fromFileSync(filePath);
    const base64String = img.toBase64String("png");
    // << image-source-create-base64-ts
    vm.set("base64String", base64String);
}
