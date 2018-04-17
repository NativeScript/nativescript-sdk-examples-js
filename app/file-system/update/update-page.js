const Observable = require("tns-core-modules/data/observable").Observable;
const fileSystemModule = require("tns-core-modules/file-system");
const dialogs = require("tns-core-modules/ui/dialogs");
let file;
let myFolder;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    const documents = fileSystemModule.knownFolders.documents();
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

function onFileRename(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-update-rename-file-code
    const fileName = vm.get("fileName");
    file.rename(`${fileName}.txt`)
        .then((res) => {
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
    // << fs-update-rename-file-code
}

function onFolderRename(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-update-rename-folder-code
    const folderName = vm.get("folderName");
    myFolder.rename(folderName)
        .then((res) => {
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
    // << fs-update-rename-folder-code
}

exports.onNavigatingTo = onNavigatingTo;
exports.onFileRename = onFileRename;
exports.onFolderRename = onFolderRename;
