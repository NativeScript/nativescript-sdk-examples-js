// >> dialog-alert-ts
import { alert, AlertOptions } from "tns-core-modules/ui/dialogs";

export function showAlertDialog() {

    const alertOptions: AlertOptions = {
        title: "Race selection",
        message: "Race chosen: Unicorn",
        okButtonText: "OK",
        cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    };

    alert(alertOptions).then(() => {
        console.log("Race chosen!");
    });

}
// << dialog-alert-ts
