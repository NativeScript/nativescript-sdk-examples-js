// >> main-page-js-navigation
const modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const options = {
        context: "some context",
        closeCallback: () => {
        },
        fullscreen: true
    };
    mainpage.showModal(modalView, options);
}
exports.openModal = openModal;
// << main-page-js-navigation
