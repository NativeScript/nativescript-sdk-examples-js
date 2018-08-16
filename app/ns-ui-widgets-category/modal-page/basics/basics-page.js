// >> main-page-js
const modalPageModule = "./ns-ui-widgets-category/modal-page/basics/modal-page";

function openModal(args) {
    const mainView = args.object;
    const context = { username:"test_username", password:"test" };
    const fullscreen = true;
    mainView.showModal(modalPageModule, context, (username, password) => {
        // Receive data from the modal page. e.g. username & password
        alert(`Username: ${username} : Password: ${password}`);
    }, fullscreen);
}
exports.openModal = openModal;
// << main-page-js
