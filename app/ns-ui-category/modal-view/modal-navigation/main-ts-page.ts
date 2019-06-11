// >> main-page-ts-navigation
import { ShowModalOptions } from "tns-core-modules/ui/core/view";
const modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";

function openModal(args) {
    const mainpage = args.object.page;
    const options: ShowModalOptions = {
        context: "some context",
        closeCallback: () => {},
        fullscreen: true
    };
    mainpage.showModal(modalView, options);
}
exports.openModal = openModal;
// << main-page-ts-navigation
