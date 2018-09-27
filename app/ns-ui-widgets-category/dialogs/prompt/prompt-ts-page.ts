import { prompt, PromptOptions, PromptResult } from "tns-core-modules/ui/dialogs";
export function onNavigatedTo(args) {
    /*
    // >> dialog-prompt-web-ts
    prompt("Your message", "Default text").then((r) => {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
    // << dialog-prompt-web-ts
    */

    showPromptDialog();
}

export function showPromptDialog() {
    // >> dialog-prompt-ts
    // import { prompt, PromptOptions, PromptResult } from "tns-core-modules/ui/dialogs";
    const promptOptions: PromptOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        defaultText: "Default",
        inputType: "password" // text, password, or email
    };
    prompt(promptOptions).then((r: PromptResult) => {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
    // << dialog-prompt-ts
}
