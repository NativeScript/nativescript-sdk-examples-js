import { Observable } from "tns-core-modules/data/observable";
import { knownFolders, File, Folder } from "tns-core-modules/file-system";
import { Page } from "tns-core-modules/ui/page";

let file: File;
let myFolder: Folder;
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    const documents: Folder = <Folder>knownFolders.documents();
    myFolder = <Folder>documents.getFolder("TestFolderName");
    file = <File>myFolder.getFile("TestFileName.txt");
    vm.set("myFolderPath", myFolder.path);
    vm.set("myFilePath", file.path);
    vm.set("resultMessage", "");
    page.bindingContext = vm;
}

export function onDeleteFile(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    if (file) {
        // >> fs-delete-file-code-ts
        file.remove()
            .then((res) => {
                // Success removing the file.
                vm.set("resultMessage", "File successfully deleted!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-delete-file-code-ts
    } else {
        vm.set("resultMessage", "Already deleted file!");
    }
}

export function onDeleteFolder(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    if (myFolder) {
        // >> fs-delete-folder-code-ts
        // Remove a folder and recursively its content.
        myFolder.remove()
            .then((fres) => {
                // Success removing the folder.
                vm.set("resultMessage", "Folder successfully deleted!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-delete-folder-code-ts
    } else {
        vm.set("resultMessage", "Already deleted folder!");
    }
}

export function onClearFolder(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    if (myFolder) {
        // >> fs-clear-folder-code-ts
        myFolder.clear()
            .then((res) => {
                // Successfully cleared the folder.
                vm.set("resultMessage", "Folder successfully cleared!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-clear-folder-code-ts
    } else {
        vm.set("resultMessage", "Cannot clear already deleted folder!");
    }
}

export function onReset(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const documents: Folder = <Folder>knownFolders.documents();
    myFolder = <Folder>documents.getFolder("TestFolderName");
    file = <File>myFolder.getFile("TestFileName.txt");
    vm.set("resultMessage", "Reset");
}

