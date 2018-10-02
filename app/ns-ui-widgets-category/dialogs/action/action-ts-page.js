"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showActionDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showActionDialog() {
    var actionOptions = {
        title: "Your Title",
        message: "Your message",
        cancelButtonText: "Cancel",
        actions: ["Option1", "Option2"],
        cancelable: true
    };
    dialogs_1.action(actionOptions).then(function (result) {
        console.log("Dialog result: ", result);
        if (result === "Options1") {
        }
        else if (result === "Option2") {
        }
    });
}
exports.showActionDialog = showActionDialog;
