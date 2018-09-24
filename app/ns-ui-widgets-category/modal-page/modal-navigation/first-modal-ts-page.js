"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigate(args) {
    var view = args.object;
    var page = view.page;
    page.frame.navigate("ns-ui-widgets-category/modal-page/modal-navigation/second-modal-ts-page");
}
exports.onNavigate = onNavigate;
function onShowingModally(args) {
    console.log("onShowingModally");
}
exports.onShowingModally = onShowingModally;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
