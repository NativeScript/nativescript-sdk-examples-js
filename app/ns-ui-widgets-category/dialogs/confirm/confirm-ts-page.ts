import { confirm, ConfirmOptions } from "tns-core-modules/ui/dialogs";

export function onNavigatedTo(args) {
    /*
    // >> dialog-confirm-web-ts
    confirm("Your message").then((result) => {
        console.log("Dialog result: ", result);
    });
    // << dialog-confirm-web-ts
    */

   showConfirmDialog();
}

export function showConfirmDialog() {
    // >> dialog-confirm-ts
    // import { confirm, ConfirmOptions } from "tns-core-modules/ui/dialogs";
    const confirmOptions: ConfirmOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral"
    };
    confirm(confirmOptions)
        .then((result) => {
            // result can be true/false/undefined
            console.log(result);
        });
    // << dialog-confirm-ts
}
