// >> dialog-login-ts
import { login, LoginOptions, LoginResult } from "@nativescript/core";

export function showLoginDialog() {

    const loginOptions: LoginOptions = {
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
    login(loginOptions).then((loginResult: LoginResult) => {
        console.log(loginResult.result);
    });

}
// << dialog-login-ts
