import { Observable, knownFolders } from "@nativescript/core";

let file;
let myFolder;
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    const documents = knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("myFolderPath", myFolder.path);
    vm.set("myFilePath", file.path);
    vm.set("resultMessage", "");
    page.bindingContext = vm;
}

export function onDeleteFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    if (file) {
        // >> fs-delete-file-code
        file.remove()
            .then((res) => {
                // Success removing the file.
                vm.set("resultMessage", "File successfully deleted!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-delete-file-code
    } else {
        vm.set("resultMessage", "Already deleted file!");
    }
}

export function onDeleteFolder(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    if (myFolder) {
        // >> fs-delete-folder-code
        // Remove a folder and recursively its content.
        myFolder.remove()
            .then((fres) => {
                // Success removing the folder.
                vm.set("resultMessage", "Folder successfully deleted!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-delete-folder-code
    } else {
        vm.set("resultMessage", "Already deleted folder!");
    }
}

export function onClearFolder(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    if (myFolder) {
        // >> fs-clear-folder-code
        myFolder.clear()
            .then((res) => {
                // Successfully cleared the folder.
                vm.set("resultMessage", "Folder successfully cleared!");
            }).catch((err) => {
                console.log(err.stack);
            });
        // << fs-clear-folder-code
    } else {
        vm.set("resultMessage", "Cannot clear already deleted folder!");
    }
}

export function onReset(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const documents = knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("resultMessage", "Successfully reset!");
}


