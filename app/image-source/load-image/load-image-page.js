const Observable = require("tns-core-modules/data/observable").Observable;
// >> require-image-source
const imageSourceModule = require("tns-core-modules/image-source");
// << require-image-source
// >> require-file-system
var fileSystemModule = require("tns-core-modules/file-system");
// << require-file-system
let callbackId;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    const imgFromResources = imageSourceModule.fromResource("icon");
    vm.set("imageFromResources", imgFromResources);


    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "images/logo.png");
    const imageFromResourcesLocalFile = imageSourceModule.fromFile(path);
    vm.set("imageFromResourcesLocalFile", imageFromResourcesLocalFile);

    const jpgImageAsBase64String = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAEAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+Pz/h5j+1Z/z9fBr/AMRt+AH/AM7uiiiv9fV9E36KOn/HMX0f+n/NlvDT/p3/ANUv/V3vrf8AP1nueaf8LOa9P+ZjjP8Ap3/0/wD6u99b/wD/2Q==";
    const imageFromBase64 = imageSourceModule.fromBase64(jpgImageAsBase64String);
    vm.set("imageFromBase64", imageFromBase64);
    page.bindingContext = vm;
}



exports.onNavigatingTo = onNavigatingTo;
