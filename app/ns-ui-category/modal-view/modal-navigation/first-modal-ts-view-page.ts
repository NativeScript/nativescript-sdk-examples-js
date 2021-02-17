// >> first-modal-view-ts-navigation
import { Page } from "@nativescript/core";
export function onNavigate(args) {
    const view = args.object;
    const page: Page = <Page>view.page;
    page.frame.navigate("ns-ui-category/modal-view/modal-navigation/second-modal-ts-view-page");
}

export function onPageLoaded(args) {
    console.log("onPageLoaded");
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << first-modal-view-ts-navigation
