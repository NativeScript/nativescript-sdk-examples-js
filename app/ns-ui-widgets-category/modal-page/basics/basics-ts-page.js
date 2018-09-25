"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalPageModulets = "/ns-ui-widgets-category/modal-page/basics/modal-ts-page";
function openModal(args) {
    var mainView = args.object;
    var context = { username: "test_username", password: "test" };
    var fullscreen = true;
    mainView.showModal(modalPageModulets, context, function (username, password) {
        alert("Username: " + username + " : Password: " + password);
    }, fullscreen);
}
exports.openModal = openModal;
