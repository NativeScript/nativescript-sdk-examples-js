// >> main-page-js-navigation
const modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const context = "some context";
    mainpage.showModal(modalView, context, () => {});
}
exports.openModal = openModal;
// << main-page-js-navigation
