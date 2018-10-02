// >> second-modal-view-js-navigation
function onGoBack(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}
exports.onGoBack = onGoBack;

function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
// << second-modal-view-js-navigation
