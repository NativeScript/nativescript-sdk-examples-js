// >> main-page-js-action-bar
const modalView = "ns-ui-category/modal-view/custom-actionbar/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const context = "some context";
    mainpage.showModal(modalView, context, () => {}, true);
}
exports.openModal = openModal;
// << main-page-js-action-bar
