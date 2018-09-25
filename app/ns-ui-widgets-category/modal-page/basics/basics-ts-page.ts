// >> main-page-ts
import { Button } from "tns-core-modules/ui/button";

const modalPageModulets = "/ns-ui-widgets-category/modal-page/basics/modal-ts-page";

export function openModal(args) {
    const mainView: Button = <Button>args.object;
    const context = { username: "test_username", password: "test" };
    const fullscreen = true;
    mainView.showModal(modalPageModulets, context, (username, password) => {
        // Receive data from the modal page. e.g. username & password
        alert(`Username: ${username} : Password: ${password}`);
    }, fullscreen);
}
// << main-page-ts
