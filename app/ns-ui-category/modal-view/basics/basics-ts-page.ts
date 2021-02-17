// >> main-view-ts
import { Button } from "@nativescript/core";
import { ShowModalOptions } from "@nativescript/core";
const modalViewModulets = "ns-ui-category/modal-view/basics/modal-ts-view-page";

export function openModal(args) {
    const mainView: Button = <Button>args.object;
    const option: ShowModalOptions = {
        context: { username: "test_username", password: "test" },
        closeCallback: (username, password) => {
            // Receive data from the modal view. e.g. username & password
            alert(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true
    };
    mainView.showModal(modalViewModulets, option);
}
// << main-view-ts
