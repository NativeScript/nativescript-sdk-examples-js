// >> dialog-login
function showLoginDialog() {

    const loginOptions = {
        title: "Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userNameHint: "Enter your username",
        passwordHint: "Enter your password",
        userName: "john_doe",
        password: "123456"
    };
    login(loginOptions).then((loginResult) => {
        console.log(loginResult.result);
    });

}
exports.showLoginDialog = showLoginDialog;
// << dialog-login
