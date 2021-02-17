import { File, Folder, ImageSource, Observable, ObservableArray, knownFolders, path } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    const array = new ObservableArray();
    const folderName = "NativeScript";
    const fileName = "README.txt";
    const fileTextContent = "Build amazing iOS and Android apps with technology you already know" +
        "Open source framework for building truly native mobile apps" +
        "with Angular, TypeScript or JavaScript.";

    let documents = knownFolders.documents();
    const folder = documents.getFolder(folderName);
    const file = folder.getFile(fileName);

    file.writeText(fileTextContent)
        .then((result) => {
            // >> fs-read-text-code
            file.readText()
                .then((res) => {
                    vm.set("writtenContent", res);
                }).catch((err) => {
                    console.log(err.stack);
                });
            // << fs-read-text-code
        }).catch((err) => {
            console.log(err);
        });

    // >> fs-folder-content-code
    documents = knownFolders.documents();
    documents.getEntities()
        .then((entities) => {
            // entities is array with the document's files and folders.
            entities.forEach((entity) => {
                array.push(
                    {
                        name: entity.name,
                        path: entity.path,
                        lastModified: entity.lastModified.toString()
                    }
                );
            });
        }).catch((err) => {
            // Failed to obtain folder's contents.
            console.log(err.stack);
        });
    // << fs-folder-content-code
    // >> fs-file-exists-check-code
    documents = knownFolders.documents();
    const path = path.join(documents.path, "Text.txt");
    const exists = File.exists(path);
    console.log(`Does Text.txt exists: ${exists}`);
    // << fs-file-exists-check-code
    // >> fs-folder-exists-check-code
    const temp = knownFolders.temp();
    const tempExists = Folder.exists(temp.path);
    console.log(`Does temp folder exists: ${tempExists}`);
    // << fs-folder-exists-check-code

    vm.set("filePath", file.path);
    vm.set("folderEntities", array);
    vm.set("binarySource", "");

    page.bindingContext = vm;
}

export function onReadSync(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-read-sync-code
    const image = ImageSource.fromResource("icon");
    const folder = knownFolders.documents();
    const path = path.join(folder.path, "Test.png");
    const saved = image.saveToFile(path, "png");

    if (saved) {
        const imageFile = File.fromPath(path);
        const binarySource = imageFile.readSync((err) => {
            console.log(err);
        });
        console.log(this.binarySource);
        // << fs-read-sync-code
        // >> fs-write-sync-code
        imageFile.writeSync(binarySource, (err) => {
            console.log(err);
        });
        // << fs-write-sync-code
        vm.set("binarySource", `Successfully read binary data: ${binarySource}`);
    }
}
