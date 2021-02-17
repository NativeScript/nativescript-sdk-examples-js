// >> main-page-js-action-bar
const modalView = "ns-ui-category/modal-view/custom-actionbar/modal-root";

export function openModal(args) {
    const mainpage = args.object.page;
    const option = {
        context: "some context",
        closeCallback: () => {},
        fullscreen: true
    };
    mainpage.showModal(modalView, option);
}

// << main-page-js-action-bar
