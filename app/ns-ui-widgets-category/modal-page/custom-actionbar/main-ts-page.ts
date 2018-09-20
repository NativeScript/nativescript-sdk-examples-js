// >> main-page-ts-action-bar
import {Page} from "tns-core-modules/ui/page";

const modalPage = "ns-ui-widgets-category/modal-page/custom-actionbar/modal-ts-root";

export function openModal(args) {
    const mainpage: Page = <Page> args.object.page;
    const context = "some context";
    mainpage.showModal(modalPage, context, () => {}, true);
}
// << main-page-ts-action-bar