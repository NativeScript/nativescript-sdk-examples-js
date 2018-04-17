const Observable = require("tns-core-modules/data/observable").Observable;
const fileSystemModule = require("tns-core-modules/file-system");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // >> fs-paths-normalize-code
    let documentsFolder = fileSystemModule.knownFolders.documents();
    const currentAppFolder = fileSystemModule.knownFolders.currentApp();
    const tempFolder = fileSystemModule.knownFolders.temp();

    const testPath = "///test.txt";
    // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
    vm.set("documents", fileSystemModule.path.normalize(documentsFolder.path + testPath));
    vm.set("currentApp", fileSystemModule.path.normalize(currentAppFolder.path + testPath));
    vm.set("temp", fileSystemModule.path.normalize(tempFolder.path + testPath));
    // << fs-paths-normalize-code
    // >> fs-paths-join-code
    // Generate a path like <documents.path>/myFiles/test.txt
    documentsFolder = fileSystemModule.knownFolders.documents();
    const filePath = fileSystemModule.path.join(documentsFolder.path, "myFiles", "test.txt");
    // << fs-paths-join-code
    console.log(filePath);

    // >> fs-paths-separator-code
    // An OS dependent path separator, "\" or "/".
    const separator = fileSystemModule.path.separator;
    // << fs-paths-separator-code
    console.log(separator);

    // >> fs-paths-create-folder-code
    const folderPath = fileSystemModule.path.join(fileSystemModule.knownFolders.documents().path, "music");
    const folder = fileSystemModule.Folder.fromPath(folderPath);
    // << fs-paths-create-folder-code
    console.log(folder);

    vm.set("textContentToBeSaved", "");
    vm.set("savedContent", "");
    vm.set("isContentSaved", false);

    page.bindingContext = vm;
}

function onSaveContentToFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-paths-create-file-code
    const documentsFolder = fileSystemModule.knownFolders.documents();
    const path = fileSystemModule.path.join(documentsFolder.path, "FileFromPath.txt");
    const file = fileSystemModule.File.fromPath(path);

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

exports.onNavigatingTo = onNavigatingTo;
exports.onSaveContentToFile = onSaveContentToFile;
