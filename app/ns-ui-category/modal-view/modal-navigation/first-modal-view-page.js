// >> first-modal-view-js-navigation
function onNavigate(args) {
    const view = args.object;
    const page = view.page;
    page.frame.navigate("ns-ui-category/modal-view/modal-navigation/second-modal-view-page");
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
// << first-modal-view-js-navigation
