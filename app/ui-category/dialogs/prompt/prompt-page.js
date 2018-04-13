exports.onNavigatedTo = function (args) {
    /*
    // >> dialog-prompt-web
    prompt("Your message", "Default text").then((r) => {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
    // << dialog-prompt-web
    */

    showPromptDialog();
};

function showPromptDialog() {
    // >> dialog-prompt
    const promptOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        defaultText: "Default",
        inputType: "password" // text, password, or email
    };
    prompt(promptOptions).then((r) => {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
    // << dialog-prompt
}
exports.showPromptDialog = showPromptDialog;
