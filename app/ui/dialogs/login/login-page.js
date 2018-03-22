exports.onNavigatedTo = function (args) {
    /*
    // >> dialog-login-web
    login("Your message", "Username", "Password").then((r) => {
        console.log("Dialog result: ", r.result);
        console.log(`User: ${r.userName}  Password: ${r.password}`, r.userName, r.password);
    });
    // << dialog-login-web
    */

    showLoginDialog();
};

function showLoginDialog() {
    // >> dialog-login
    const loginOptions = {
        title: "Your title",
        message: "Your message",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "Username",
        password: "Password"
    };
    login(loginOptions).then((r) => {
        console.log("Dialog result: ", r.result);
        console.log(`User: ${r.userName}  Password: ${r.password}`, r.userName, r.password);
    });
    // << dialog-login
}
exports.showLoginDialog = showLoginDialog;
