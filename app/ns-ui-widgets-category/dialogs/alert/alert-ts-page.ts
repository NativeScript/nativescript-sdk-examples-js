import { alert, AlertOptions } from "tns-core-modules/ui/dialogs";

export function onNavigatedTo(args) {
    /*
    // >> dialog-alert-web-ts
    alert("Your message").then(() => {
        console.log("Dialog closed!");
    });
    // << dialog-alert-web-ts
    */

    showAlertDialog();
}

export function showAlertDialog() {
    // >> dialog-alert-ts
    // import { AlertOptions } from "tns-core-modules/ui/dialogs";
    const alertOptions: AlertOptions = {
        title: "Your Title",
        message: "Your message",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };

    alert(alertOptions).then(() => {
        console.log("Dialog closed!");
    });
    // << dialog-alert-ts
}
