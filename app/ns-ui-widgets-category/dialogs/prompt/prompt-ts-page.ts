import { prompt, PromptOptions, PromptResult, capitalizationType, inputType } from "tns-core-modules/ui/dialogs";
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
        inputType: inputType.text, // email, number, text, password, or email
        capitalizationType: capitalizationType.sentences // all. none, sentences or words
    };
    prompt(promptOptions).then((r: PromptResult) => {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
    // << dialog-prompt-ts
}
