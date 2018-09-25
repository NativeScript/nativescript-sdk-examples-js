"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("folderName", "");
    vm.set("fileName", "");
    vm.set("fileTextContent", "");
    vm.set("isItemVisible", false);
    vm.set("successMessage", "");
    vm.set("writtenContent", "");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onCreateFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var documents = file_system_1.knownFolders.documents();
    var folder = documents.getFolder(vm.get("folderName") || "testFolder");
    var file = folder.getFile("" + (vm.get("fileName") || "testFile") + ".txt");
    file.writeText(vm.get("fileTextContent") || "some random content")
        .then(function () {
        file.readText()
            .then(function (res) {
            vm.set("successMessage", "Successfully saved in" + file.path);
            vm.set("writtenContent", res);
            vm.set("isItemVisible", true);
        });
    }).catch(function (err) {
        console.log(err);
    });
}
exports.onCreateFile = onCreateFile;
