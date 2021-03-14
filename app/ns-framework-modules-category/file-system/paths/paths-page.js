import { File, Folder, Observable, knownFolders, path } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // >> fs-paths-normalize-code
    let documentsFolder = knownFolders.documents();
    const currentAppFolder = knownFolders.currentApp();
    const tempFolder = knownFolders.temp();

    const testPath = "///test.txt";
    // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
    vm.set("documents", path.normalize(documentsFolder.path + testPath));
    vm.set("currentApp", path.normalize(currentAppFolder.path + testPath));
    vm.set("temp", path.normalize(tempFolder.path + testPath));
    // << fs-paths-normalize-code
    // >> fs-paths-join-code
    // Generate a path like <documents.path>/myFiles/test.txt
    documentsFolder = knownFolders.documents();
    const filePath = path.join(documentsFolder.path, "myFiles", "test.txt");
    // << fs-paths-join-code
    console.log(filePath);

    // >> fs-paths-separator-code
    // An OS dependent path separator, "\" or "/".
    const separator = path.separator;
    // << fs-paths-separator-code
    console.log(separator);

    // >> fs-paths-create-folder-code
    const folderPath = path.join(knownFolders.documents().path, "music");
    const folder = Folder.fromPath(folderPath);
    // << fs-paths-create-folder-code
    console.log(folder);

    vm.set("textContentToBeSaved", "");
    vm.set("savedContent", "");
    vm.set("isContentSaved", false);

    page.bindingContext = vm;
}

export function onSaveContentToFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-paths-create-file-code
    const documentsFolder = knownFolders.documents();
    const filePath = path.join(documentsFolder.path, "FileFromPath.txt");
    const file = File.fromPath(filePath);

    // Writing text to the file.
    file.writeText(vm.get("textContentToBeSaved"))
        .then((result) => {
            // Succeeded writing to the file.
            file.readText().then((res) => {
                // Succeeded read from file.
                vm.set("isContentSaved", true);
                vm.set("savedContent", res);
                console.log(`File content:  ${res}`);
            });
        }).catch((err) => {
            console.log(err.stack);
        });
    // << fs-paths-create-file-code
}


