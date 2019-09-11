// >> dialog-confirm-ts
import { confirm, ConfirmOptions } from "tns-core-modules/ui/dialogs";

export function showConfirmDialog() {
    
    const confirmOptions: ConfirmOptions = {
        title: "Race selection",
        message: "Are you sure you want to be a Unicorn?",
        okButtonText: "Yes",
        cancelButtonText: "No",
        neutralButtonText: "Cancel"
    };
    confirm(confirmOptions)
        .then((result) => {
            console.log(result);
        });
    
}
// << dialog-confirm-ts