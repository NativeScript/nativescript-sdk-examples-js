import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { knownFolders, path, File, Folder } from "tns-core-modules/file-system";
import { fromResource, ImageSource } from "tns-core-modules/image-source";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const array = new ObservableArray();
    const folderName: string = "NativeScript";
    const fileName: string = "README.txt";
    const fileTextContent: string = "Build amazing iOS and Android apps with technology you already know" +
        "Open source framework for building truly native mobile apps" +
        "with Angular, TypeScript or JavaScript.";

    let documents: Folder = knownFolders.documents();
    const folder: Folder = documents.getFolder(folderName);
    const file: File = folder.getFile(fileName);

    file.writeText(fileTextContent)
        .then(() => {
            // >> fs-read-text-code-ts
            file.readText()
                .then((res) => {
                    vm.set("writtenContent", res);
                }).catch((err) => {
                    console.log(err.stack);
                });
            // << fs-read-text-code-ts
        }).catch((err) => {
            console.log(err);
        });

    // >> fs-folder-content-code-ts
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
    // << fs-folder-content-code-ts
    // >> fs-file-exists-check-code-ts
    documents = knownFolders.documents();
    const filePath = path.join(documents.path, "Text.txt");
    const exists = File.exists(filePath);
    console.log(`Does Text.txt exists: ${exists}`);
    // << fs-file-exists-check-code-ts
    // >> fs-folder-exists-check-code-ts
    const temp: Folder = <Folder>knownFolders.temp();
    const tempExists: boolean = Folder.exists(temp.path);
    console.log(`Does temp folder exists: ${tempExists}`);
    // << fs-folder-exists-check-code-ts

    vm.set("filePath", file.path);
    vm.set("folderEntities", array);
    vm.set("binarySource", "");

    page.bindingContext = vm;
}

export function onReadSync(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> fs-read-sync-code-ts
    const image: ImageSource = fromResource("icon");
    const folder: Folder = knownFolders.documents();
    const filePath: string = path.join(folder.path, "Test.png");
    const saved = image.saveToFile(filePath, "png");

    if (saved) {
        const imageFile: File = File.fromPath(filePath);
        const binarySource = imageFile.readSync((err) => {
            console.log(err);
        });
        console.log(this.binarySource);
        // << fs-read-sync-code-ts
        // >> fs-write-sync-code-ts
        imageFile.writeSync(binarySource, (err) => {
            console.log(err);
        });
        // << fs-write-sync-code-ts
        vm.set("binarySource", `Successfully read binary data: ${binarySource}`);
    }
}
