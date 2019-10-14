// >> text-field-binding-code
const observableModule = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("viewDate", "");

    page.bindingContext = vm;
}
function onTextFieldLoaded(argsloaded) {
    const view = argsloaded.object;
    view.on("returnPress", (args) => {
        // returnPress event will be triggered when user submits a value
        const textField = args.object;
        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
        // Gets or sets the secure option (e.g. for passwords).
        console.log(textField.secure);

        // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
        console.log(textField.keyboardType);
        // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
        console.log(textField.returnKeyType);
        // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
        console.log(textField.autocapitalizationType);

        // Gets or sets a value indicating when the text property will be updated.
        console.log(textField.updateTextTrigger);
        // Gets or sets whether the instance is editable.
        console.log(textField.editable);
        // Enables or disables autocorrection.
        console.log(textField.autocorrect);
        // Limits input to a certain number of characters.
        console.log(textField.maxLength);

        setTimeout(() => {
            textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
        }, 100);
    });
    view.on("focus", (args) => {
        const textField = args.object;
        console.log("On TextField focus");
    });
    view.on("blur", (args) => {
        const textField = args.object;
        console.log("On TextField blur");
    });
}
exports.onNavigatingTo = onNavigatingTo;
exports.onTextFieldLoaded = onTextFieldLoaded;
// << text-field-binding-code
