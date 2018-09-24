"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var documentsFolder = file_system_1.knownFolders.documents();
    var currentAppFolder = file_system_1.knownFolders.currentApp();
    var tempFolder = file_system_1.knownFolders.temp();
    var testPath = "///test.txt";
    vm.set("documents", file_system_1.path.normalize(documentsFolder.path + testPath));
    vm.set("currentApp", file_system_1.path.normalize(currentAppFolder.path + testPath));
    vm.set("temp", file_system_1.path.normalize(tempFolder.path + testPath));
    documentsFolder = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(documentsFolder.path, "myFiles", "test.txt");
    console.log(filePath);
    var separator = file_system_1.path.separator;
    console.log(separator);
    var folderPath = file_system_1.path.join(file_system_1.knownFolders.documents().path, "music");
    var folder = file_system_1.Folder.fromPath(folderPath);
    console.log(folder);
    vm.set("textContentToBeSaved", "");
    vm.set("savedContent", "");
    vm.set("isContentSaved", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSaveContentToFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var documentsFolder = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(documentsFolder.path, "FileFromPath.txt");
    var file = file_system_1.File.fromPath(filePath);
    file.writeText(vm.get("textContentToBeSaved"))
        .then(function (result) {
        file.readText().then(function (res) {
            vm.set("isContentSaved", true);
            vm.set("savedContent", res);
            console.log("File content:  " + res);
        });
    }).catch(function (err) {
        console.log(err.stack);
    });
}
exports.onSaveContentToFile = onSaveContentToFile;
