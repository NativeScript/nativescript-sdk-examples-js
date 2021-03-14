// >> dialog-action-ts
import { action, ActionOptions } from "@nativescript/core";

export function showActionDialog() {

    const actionOptions: ActionOptions = {
        title: "Race selection",
        message: "Choose your race",
        cancelButtonText: "Cancel",
        actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"],
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
}
// << dialog-action-ts
