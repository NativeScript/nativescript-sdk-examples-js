// >> second-modal-view-js-navigation
export function onGoBack(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << second-modal-view-js-navigation
