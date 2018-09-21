// >> first-modal-page-ts-navigation
import {Page} from "tns-core-modules/ui/page";
export function onNavigate(args) {
    const view = args.object;
    const page: Page = <Page> view.page;
    page.frame.navigate("ns-ui-widgets-category/modal-page/modal-navigation/second-modal-ts-page");
}

export function onShowingModally(args) {
    console.log("onShowingModally");
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << first-modal-page-ts-navigation
