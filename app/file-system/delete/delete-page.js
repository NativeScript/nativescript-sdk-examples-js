const Observable = require("tns-core-modules/data/observable").Observable;
const fileSystemModule = require("tns-core-modules/file-system");

let file;
let myFolder;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    const documents = fileSystemModule.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("myFolderPath", myFolder.path);
    vm.set("myFilePath", file.path);
    vm.set("resultMessage", "");
    page.bindingContext = vm;
}

function onDeleteFile(args) {
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

function onDeleteFolder(args) {
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

function onClearFolder(args) {
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

function onReset() {
    const documents = fileSystemModule.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    tresultMessage = "Successfully reset!";
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDeleteFile = onDeleteFile;
exports.onDeleteFolder = onDeleteFolder;
exports.onClearFolder = onClearFolder;
exports.onReset = onReset;
