"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalViewModulets = "ns-ui-category/modal-view/basics/modal-ts-view-page";
function openModal(args) {
    var mainView = args.object;
    var context = { username: "test_username", password: "test" };
    var fullscreen = true;
    mainView.showModal(modalViewModulets, context, function (username, password) {
        alert("Username: " + username + " : Password: " + password);
    }, fullscreen);
}
exports.openModal = openModal;
