// >> dialog-prompt-ts
import { prompt, PromptOptions, PromptResult, capitalizationType, inputType } from "tns-core-modules/ui/dialogs";

export function showPromptDialog() {

    const promptOptions: PromptOptions = {
        title: "Hey There",
        defaultText: " Enter your mood ",
        message: "How you doin'",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        cancelable: true,
        inputType: inputType.text, // email, number, text, password, or email
        capitalizationType: capitalizationType.sentences // all. none, sentences or words
    };
    prompt(promptOptions).then((result: PromptResult) => {
        console.log("Hello, " + result.text);
    });

}
// << dialog-prompt-ts
