import { Observable } from "tns-core-modules/data/observable";
import { knownFolders, path, Folder, File } from "tns-core-modules/file-system";
import { Page } from "tns-core-modules/ui/page";
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    // >> fs-paths-normalize-code-ts
    let documentsFolder: Folder = <Folder>knownFolders.documents();
    const currentAppFolder = knownFolders.currentApp();
    const tempFolder = knownFolders.temp();

    const testPath: string = "///test.txt";
    // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
    vm.set("documents", path.normalize(documentsFolder.path + testPath));
    vm.set("currentApp", path.normalize(currentAppFolder.path + testPath));
    vm.set("temp", path.normalize(tempFolder.path + testPath));
    // << fs-paths-normalize-code-ts
    // >> fs-paths-join-code-ts
    // Generate a path like <documents.path>/myFiles/test.txt
    documentsFolder = <Folder>knownFolders.documents();
    const filePath: string = path.join(documentsFolder.path, "myFiles", "test.txt");
    // << fs-paths-join-code-ts
    console.log(filePath);

    // >> fs-paths-separator-code-ts
    // An OS dependent path separator, "\" or "/".
    const separator = path.separator;
    // << fs-paths-separator-code-ts
    console.log(separator);

    // >> fs-paths-create-folder-code-ts
    const folderPath: string = path.join(knownFolders.documents().path, "music");
    const folder: Folder = <Folder>Folder.fromPath(folderPath);
    // << fs-paths-create-folder-code-ts
    console.log(folder);

    vm.set("textContentToBeSaved", "");
    vm.set("savedContent", "");
    vm.set("isContentSaved", false);

    page.bindingContext = vm;
}

export function onSaveContentToFile(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> fs-paths-create-file-code-ts
    const documentsFolder: Folder = <Folder>knownFolders.documents();
    const filePath: string = path.join(documentsFolder.path, "FileFromPath.txt");
    const file: File = File.fromPath(filePath);

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
    // << fs-paths-create-file-code-ts
}
