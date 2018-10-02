"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function onNavigatedTo(args) {
    showLoginDialog();
}
exports.onNavigatedTo = onNavigatedTo;
function showLoginDialog() {
    var loginOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "Username",
        password: "Password"
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("Dialog result: ", r.result);
        console.log("User: " + r.userName + "  Password: " + r.password, r.userName, r.password);
    });
}
exports.showLoginDialog = showLoginDialog;
