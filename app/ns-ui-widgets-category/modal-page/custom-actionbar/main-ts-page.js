"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalPage = "ns-ui-widgets-category/modal-page/custom-actionbar/modal-ts-root";
function openModal(args) {
    var mainpage = args.object.page;
    var context = "some context";
    mainpage.showModal(modalPage, context, function () { }, true);
}
exports.openModal = openModal;
