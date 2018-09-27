import { action, ActionOptions } from "tns-core-modules/ui/dialogs";

export function onNavigatedTo(args) {
    /*
    // >> dialog-action-web-ts
    action("Your message", "Cancel", ["Option1", "Option2"]).then((result) => {
        console.log("Dialog result: " + result);
        if(result === "Options1") {
            // Do action1
        } else if(result === "Option2") {
            // Do action2
        }
    });
    // << dialog-action-web-ts
    */

    showActionDialog();
}

export function showActionDialog() {
    // >> dialog-action-ts
    // import { action, ActionOptions } from "tns-core-modules/ui/dialogs";
    const actionOptions: ActionOptions = {
        title: "Your Title",
        message: "Your message",
        cancelButtonText: "Cancel",
        actions: ["Option1", "Option2"],
        cancelable: true // Android only
    };

    action(actionOptions).then((result) => {
        console.log("Dialog result: ", result);
        if (result === "Options1") {
            // Do action 1
        } else if (result === "Option2") {
            // Do action 2
        }
    });
    // << dialog-action-ts
}
