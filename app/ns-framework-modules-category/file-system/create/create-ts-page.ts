import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
// >> fs-create-import
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
// << fs-create-import

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
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    // >> fs-create-all-code-ts
    const documents: Folder = <Folder>knownFolders.documents();
    const folder: Folder = <Folder>documents.getFolder(vm.get("folderName") || "testFolder");
    const file: File = <File>folder.getFile(`${(vm.get("fileName") || "testFile")}` + `.txt`);

    file.writeText(vm.get("fileTextContent") || "some random content")
        .then(() => {
            file.readText()
                .then((res) => {
                    vm.set("successMessage", `Successfully saved in${file.path}`);
                    vm.set("writtenContent", res);
                    vm.set("isItemVisible", true);
                });
        }).catch((err) => {
            console.log(err);
        });
    // << fs-create-all-code-ts
}
