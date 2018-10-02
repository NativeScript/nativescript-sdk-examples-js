// >> main-view-js
const modalViewModule = "ns-ui-category/modal-view/basics/modal-view-page";

function openModal(args) {
    const mainView = args.object;
    const context = { username:"test_username", password:"test" };
    const fullscreen = true;
    mainView.showModal(modalViewModule, context, (username, password) => {
        // Receive data from the modal page. e.g. username & password
        alert(`Username: ${username} : Password: ${password}`);
    }, fullscreen);

}
exports.openModal = openModal;
// << main-view-js
