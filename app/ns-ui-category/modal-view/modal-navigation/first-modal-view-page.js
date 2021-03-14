// >> first-modal-view-js-navigation
export function onNavigate(args) {
    const view = args.object;
    const page = view.page;
    page.frame.navigate("ns-ui-category/modal-view/modal-navigation/second-modal-view-page");
}

export function onPageLoaded(args) {
    console.log("onPageLoaded");
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << first-modal-view-js-navigation
