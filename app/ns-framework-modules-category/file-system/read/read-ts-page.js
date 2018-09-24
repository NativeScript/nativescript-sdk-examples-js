"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var file_system_1 = require("tns-core-modules/file-system");
var image_source_1 = require("tns-core-modules/image-source");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var array = new observable_array_1.ObservableArray();
    var folderName = "NativeScript";
    var fileName = "README.txt";
    var fileTextContent = "Build amazing iOS and Android apps with technology you already know" +
        "Open source framework for building truly native mobile apps" +
        "with Angular, TypeScript or JavaScript.";
    var documents = file_system_1.knownFolders.documents();
    var folder = documents.getFolder(folderName);
    var file = folder.getFile(fileName);
    file.writeText(fileTextContent)
        .then(function () {
        file.readText()
            .then(function (res) {
            vm.set("writtenContent", res);
        }).catch(function (err) {
            console.log(err.stack);
        });
    }).catch(function (err) {
        console.log(err);
    });
    documents = file_system_1.knownFolders.documents();
    documents.getEntities()
        .then(function (entities) {
        entities.forEach(function (entity) {
            array.push({
                name: entity.name,
                path: entity.path,
                lastModified: entity.lastModified.toString()
            });
        });
    }).catch(function (err) {
        console.log(err.stack);
    });
    documents = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(documents.path, "Text.txt");
    var exists = file_system_1.File.exists(filePath);
    console.log("Does Text.txt exists: " + exists);
    var temp = file_system_1.knownFolders.temp();
    var tempExists = file_system_1.Folder.exists(temp.path);
    console.log("Does temp folder exists: " + tempExists);
    vm.set("filePath", file.path);
    vm.set("folderEntities", array);
    vm.set("binarySource", "");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onReadSync(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var image = image_source_1.fromResource("icon");
    var folder = file_system_1.knownFolders.documents();
    var filePath = file_system_1.path.join(folder.path, "Test.png");
    var saved = image.saveToFile(filePath, "png");
    if (saved) {
        var imageFile = file_system_1.File.fromPath(filePath);
        var binarySource = imageFile.readSync(function (err) {
            console.log(err);
        });
        console.log(this.binarySource);
        imageFile.writeSync(binarySource, function (err) {
            console.log(err);
        });
        vm.set("binarySource", "Successfully read binary data: " + binarySource);
    }
}
exports.onReadSync = onReadSync;
