"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showAlertDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showAlertDialog() {
    var alertOptions = {
        title: "Your Title",
        message: "Your message",
        okButtonText: "OK",
        cancelable: false
    };
    dialogs_1.alert(alertOptions).then(function () {
        console.log("Dialog closed!");
    });
}
exports.showAlertDialog = showAlertDialog;
