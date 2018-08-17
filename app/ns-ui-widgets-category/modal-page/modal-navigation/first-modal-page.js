// >> first-modal-page-js-navigation
function onNavigate(args) {
    const view = args.object;
    const page = view.page;
    page.frame.navigate("ns-ui-widgets-category/modal-page/modal-navigation/second-modal-page");
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
// << first-modal-page-js-navigation
