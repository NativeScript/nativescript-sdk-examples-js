"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalView = "ns-ui-category/modal-view/custom-actionbar/modal-ts-root";
function openModal(args) {
    var mainpage = args.object.page;
    var context = "some context";
    mainpage.showModal(modalView, context, function () { }, true);
}
exports.openModal = openModal;
