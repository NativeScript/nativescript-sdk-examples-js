"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onGoBack(args) {
    var view = args.object;
    var page = view.page;
    page.frame.goBack();
}
exports.onGoBack = onGoBack;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
