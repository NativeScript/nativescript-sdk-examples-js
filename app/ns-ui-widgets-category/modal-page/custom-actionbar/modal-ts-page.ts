// >> modal-page-ts-action-bar

export function onShowingModally(args) {
    console.log("onShowingModally");
}

export function onCloseModal(args) {
    args.object.closeModal();
}
// << modal-page-ts-action-bar
