"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
var dialogs = require("tns-core-modules/ui/dialogs");
var file;
var myFolder;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var documents = file_system_1.knownFolders.documents();
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
exports.onNavigatingTo = onNavigatingTo;
function onFileRename(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var fileName = vm.get("fileName");
    file.rename(fileName + ".txt")
        .then(function () {
        vm.set("fileSuccessMessage", "File renamed to:  " + fileName + ".txt");
        vm.set("isItemVisible", true);
    }).catch(function (err) {
        console.log("Error: ");
        console.log(err);
        dialogs.alert(err)
            .then(function () {
            console.log("Dialog closed!");
        });
    });
}
exports.onFileRename = onFileRename;
function onFolderRename(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folderName = vm.get("folderName");
    myFolder.rename(folderName)
        .then(function () {
        vm.set("folderSuccessMessage", "Folder renamed to:  " + folderName);
        vm.set("isFolderItemVisible", true);
    }).catch(function (err) {
        console.log("Error: ");
        console.log(err);
        dialogs.alert(err)
            .then(function () {
            console.log("Dialog closed!");
        });
    });
}
exports.onFolderRename = onFolderRename;
