// >> main-page-ts-action-bar
import { Page } from "tns-core-modules/ui/page";
import { ShowModalOptions } from "tns-core-modules/ui/core/view";
const modalView = "ns-ui-category/modal-view/custom-actionbar/modal-ts-root";

export function openModal(args) {
    const mainpage: Page = <Page>args.object.page;
    const option: ShowModalOptions = {
        context: "some context",
        closeCallback: () => {},
        fullscreen: true
    };
    mainpage.showModal(modalView, option);
}
// << main-page-ts-action-bar
