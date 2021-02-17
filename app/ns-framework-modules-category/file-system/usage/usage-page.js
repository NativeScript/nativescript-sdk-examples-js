import { Observable, knownFolders } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("folderName", "");
    vm.set("fileName", "");
    vm.set("fileTextContent", "");
    vm.set("isItemVisible", false);

    vm.set("successMessage", "");
    vm.set("writtenContent", "");


    page.bindingContext = vm;
}

export function onCreateFile(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> fs-create-all-code
    const documents = knownFolders.documents();
    const folder = documents.getFolder(vm.get("folderName") || "testFolder");
    const file = folder.getFile(`${(vm.get("fileName") || "testFile")}`.txt);

    file.writeText(vm.get("fileTextContent") || "some random content")
        .then((result) => {
            file.readText()
                .then((res) => {
                    vm.set("successMessage", `Successfully saved in${file.path}`);
                    vm.set("writtenContent", res);
                    vm.set("isItemVisible", true);
                });
        }).catch((err) => {
            console.log(err);
        });
    // << fs-create-all-code
}

