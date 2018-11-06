"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showPromptDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showPromptDialog() {
    var promptOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        defaultText: "Default",
        inputType: "password"
    };
    dialogs_1.prompt(promptOptions).then(function (r) {
        console.log("Dialog result: ", r.result);
        console.log("Text: ", r.text);
    });
}
exports.showPromptDialog = showPromptDialog;
