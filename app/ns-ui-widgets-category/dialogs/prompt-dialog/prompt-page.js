// >> dialog-prompt
function showPromptDialog() {
    
    const promptOptions = {
        title: "Hey There",
        defaultText: " Enter your mood ",
        message: "How you doin'",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        cancelable: true,
        inputType: "text", // email, number, text, password, or email
        capitalizationType: "sentences" // all, none, sentences or words
    };
    prompt(promptOptions).then((result) => {
        console.log("Hello, " + result.text);
    });
    
}
exports.showPromptDialog = showPromptDialog;
// << dialog-prompt