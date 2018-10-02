// >> main-page-ts-action-bar
import { Page } from "tns-core-modules/ui/page";

const modalView = "ns-ui-category/modal-view/custom-actionbar/modal-ts-root";

export function openModal(args) {
    const mainpage: Page = <Page>args.object.page;
    const context = "some context";
    mainpage.showModal(modalView, context, () => { }, true);
}
// << main-page-ts-action-bar
