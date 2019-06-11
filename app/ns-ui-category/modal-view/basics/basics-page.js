// >> main-view-js
const modalViewModule = "ns-ui-category/modal-view/basics/modal-view-page";

function openModal(args) {
    const mainView = args.object;
    const option = {
        context: { username: "test_username", password: "test" },
        closeCallback: (username, password) => {
            // Receive data from the modal view. e.g. username & password
            alert(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true
    };
    mainView.showModal(modalViewModule, option);

}
exports.openModal = openModal;
// << main-view-js
