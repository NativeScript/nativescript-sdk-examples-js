// >> modal-view-js-action-bar
function onShowingModally(args) {
    console.log("onShowingModally");
}
exports.onShowingModally = onShowingModally;

function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
// << modal-view-js-action-bar
