"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onShowingModally(args) {
    console.log("onShowingModally");
}
exports.onShowingModally = onShowingModally;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
