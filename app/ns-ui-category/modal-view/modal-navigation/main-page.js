// >> main-page-js-navigation
const modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";

export function openModal(args) {
    const mainpage = args.object.page;
    const options = {
        context: "some context",
        closeCallback: () => {
        },
        fullscreen: true
    };
    mainpage.showModal(modalView, options);
}

// << main-page-js-navigation
