import { Observable } from "tns-core-modules/data/observable";
import { File, Folder, knownFolders } from "tns-core-modules/file-system";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

let file: File;
let myFolder: Folder;
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    const documents: Folder = knownFolders.documents();
    file = documents.getFile("TestFileName.txt");
    myFolder = documents.getFolder("TestFolderName");

    vm.set("fileName", "TestFileName");
    vm.set("fileSuccessMessage", "");
    vm.set("folderName", "TestFolderName");
    vm.set("folderSuccessMessage", "");
    vm.set("isItemVisible", false);
    vm.set("isFolderItemVisible", false);

    page.bindingContext = vm;
}

export function onFileRename(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> fs-update-rename-file-code-ts
    const fileName: string = vm.get("fileName");
    file.rename(`${fileName}.txt`)
        .then(() => {
            // File Successfully Renamed.
            vm.set("fileSuccessMessage", `File renamed to:  ${fileName}.txt`);
            vm.set("isItemVisible", true);
        }).catch((err) => {
            // Error!
            console.log("Error: ");
            console.log(err);
            dialogs.alert(err)
                .then(() => {
                    console.log("Dialog closed!");
                });
        });
    // << fs-update-rename-file-code-ts
}

export function onFolderRename(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> fs-update-rename-folder-code-ts
    const folderName: string = vm.get("folderName");
    myFolder.rename(folderName)
        .then(() => {
            // Folder Successfully Renamed.
            vm.set("folderSuccessMessage", `Folder renamed to:  ${folderName}`);
            vm.set("isFolderItemVisible", true);
        }).catch((err) => {
            // Error!
            console.log("Error: ");
            console.log(err);
            dialogs.alert(err)
                .then(() => {
                    console.log("Dialog closed!");
                });
        });
    // << fs-update-rename-folder-code-ts
}
