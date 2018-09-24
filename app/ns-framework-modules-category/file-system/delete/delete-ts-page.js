"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
var file;
var myFolder;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var documents = file_system_1.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("myFolderPath", myFolder.path);
    vm.set("myFilePath", file.path);
    vm.set("resultMessage", "");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onDeleteFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (file) {
        file.remove()
            .then(function (res) {
            vm.set("resultMessage", "File successfully deleted!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Already deleted file!");
    }
}
exports.onDeleteFile = onDeleteFile;
function onDeleteFolder(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (myFolder) {
        myFolder.remove()
            .then(function (fres) {
            vm.set("resultMessage", "Folder successfully deleted!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Already deleted folder!");
    }
}
exports.onDeleteFolder = onDeleteFolder;
function onClearFolder(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (myFolder) {
        myFolder.clear()
            .then(function (res) {
            vm.set("resultMessage", "Folder successfully cleared!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Cannot clear already deleted folder!");
    }
}
exports.onClearFolder = onClearFolder;
function onReset(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var documents = file_system_1.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("resultMessage", "Reset");
}
exports.onReset = onReset;
