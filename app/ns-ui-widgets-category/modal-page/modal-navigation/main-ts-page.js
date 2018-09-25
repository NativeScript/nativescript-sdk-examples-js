var modalPage = "ns-ui-widgets-category/modal-page/modal-navigation/modal-root";
function openModal(args) {
    var mainpage = args.object.page;
    var context = "some context";
    mainpage.showModal(modalPage, context, function () { });
}
exports.openModal = openModal;
