const Observable = require("tns-core-modules/data/observable").Observable;
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const fileSystemModule = require("tns-core-modules/file-system");
const imageSourceModule = require("tns-core-modules/image-source");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    let array = new ObservableArray();
    const folderName = "NativeScript";
    const fileName = "README.txt";
    const fileTextContent = "Build amazing iOS and Android apps with technology you already know" +
        "Open source framework for building truly native mobile apps" +
        "with Angular, TypeScript or JavaScript.";

    let documents = fileSystemModule.knownFolders.documents();
    let folder = documents.getFolder(folderName);
    let file = folder.getFile(fileName);

    file.writeText(fileTextContent)
        .then(result => {
            // >> fs-read-text-code
            file.readText()
                .then(res => {
                    vm.set("writtenContent", res);
                }).catch(err => {
                    console.log(err.stack);
                });
            // << fs-read-text-code
        }).catch(err => {
            console.log(err);
        });

    // >> fs-folder-content-code
    documents = fileSystemModule.knownFolders.documents();
    documents.getEntities()
        .then(entities => {
            // entities is array with the document's files and folders.
            entities.forEach(entity => {
                array.push(
                    {
                        name: entity.name,
                        path: entity.path,
                        lastModified: entity.lastModified.toString()
                    }
                );
            });
        }).catch(err => {
            // Failed to obtain folder's contents.
            console.log(err.stack);
        });
    // << fs-folder-content-code
    // >> fs-file-exists-check-code
    documents = fileSystemModule.knownFolders.documents();
    let path = fileSystemModule.path.join(documents.path, "Text.txt");
    let exists = fileSystemModule.File.exists(path);
    console.log("Does Text.txt exists: " + exists);
    // << fs-file-exists-check-code
    // >> fs-folder-exists-check-code
    let temp = fileSystemModule.knownFolders.temp();
    let tempExists = fileSystemModule.Folder.exists(temp.path);
    console.log("Does temp folder exists: " + tempExists);
    // << fs-folder-exists-check-code

    vm.set("filePath", file.path);
    vm.set("folderEntities", array);
    vm.set("binarySource", "");

    page.bindingContext = vm;
}

function onReadSync(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-read-sync-code
    let image = imageSourceModule.fromResource("icon");
    let folder = fileSystemModule.knownFolders.documents();
    let path = fileSystemModule.path.join(folder.path, "Test.png");
    let saved = image.saveToFile(path, "png");

    if (saved) {
        let imageFile = fileSystemModule.File.fromPath(path);
        let binarySource = imageFile.readSync(err => { console.log("Error:" + err); });
        console.log(this.binarySource);
        // << fs-read-sync-code
        // >> fs-write-sync-code
        imageFile.writeSync(binarySource, err => {
            console.log(err);
        });
        // << fs-write-sync-code
        vm.set("binarySource", `Successfully read binary data: ${binarySource}`);
    }
}
exports.onNavigatingTo = onNavigatingTo;
exports.onReadSync = onReadSync;
