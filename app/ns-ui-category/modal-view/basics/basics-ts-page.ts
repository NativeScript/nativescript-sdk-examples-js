// >> main-view-ts
import { Button } from "tns-core-modules/ui/button";

const modalViewModulets = "ns-ui-category/modal-view/basics/modal-ts-view-page";

export function openModal(args) {
    const mainView: Button = <Button>args.object;
    const context = { username: "test_username", password: "test" };
    const fullscreen = true;
    mainView.showModal(modalViewModulets, context, (username, password) => {
        // Receive data from the modal view. e.g. username & password
        alert(`Username: ${username} : Password: ${password}`);
    }, fullscreen);
}
// << main-view-ts
