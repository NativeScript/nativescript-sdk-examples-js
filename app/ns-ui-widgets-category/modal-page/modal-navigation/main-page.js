// >> main-page-js-navigation
const modalPage = "ns-ui-widgets-category/modal-page/modal-navigation/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const context = "some context";
    mainpage.showModal(modalPage, context, () => {});
}
exports.openModal = openModal;
// << main-page-js-navigation
