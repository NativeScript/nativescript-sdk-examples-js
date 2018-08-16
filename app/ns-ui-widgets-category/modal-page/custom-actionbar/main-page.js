// >> main-page-js-action-bar
const modalPage = "./ns-ui-widgets-category/modal-page/custom-actionbar/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const context = "some context";
    mainpage.showModal(modalPage, context, () => {});
}
exports.openModal = openModal;
// << main-page-js-action-bar
