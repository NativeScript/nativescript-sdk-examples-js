// >> second-modal-view-ts-navigation
import { Page } from "@nativescript/core";

export function onGoBack(args) {
    const view = args.object;
    const page: Page = <Page>view.page;

    page.frame.goBack();
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << second-modal-view-ts-navigation
