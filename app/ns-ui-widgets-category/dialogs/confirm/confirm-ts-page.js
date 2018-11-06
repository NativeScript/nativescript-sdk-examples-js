"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showConfirmDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showConfirmDialog() {
    var confirmOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral"
    };
    dialogs_1.confirm(confirmOptions)
        .then(function (result) {
        console.log(result);
    });
}
exports.showConfirmDialog = showConfirmDialog;
