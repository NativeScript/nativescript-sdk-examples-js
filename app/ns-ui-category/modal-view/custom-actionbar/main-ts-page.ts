// >> main-page-ts-action-bar
import { Page } from "@nativescript/core";
import { ShowModalOptions } from "@nativescript/core";
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
