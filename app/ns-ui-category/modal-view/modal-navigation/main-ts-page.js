var modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";
function openModal(args) {
    var mainpage = args.object.page;
    var context = "some context";
    mainpage.showModal(modalView, context, function () { });
}
exports.openModal = openModal;
