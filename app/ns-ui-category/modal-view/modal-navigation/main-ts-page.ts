// >> main-page-ts-navigation
import { ShowModalOptions } from "@nativescript/core";
const modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";

export function openModal(args) {
    const mainpage = args.object.page;
    const options: ShowModalOptions = {
        context: "some context",
        closeCallback: () => {},
        fullscreen: true
    };
    mainpage.showModal(modalView, options);
}

// << main-page-ts-navigation
