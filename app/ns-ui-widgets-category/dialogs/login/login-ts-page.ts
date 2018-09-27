import { EventData } from "tns-core-modules/data/observable";
import { login, LoginOptions } from "tns-core-modules/ui/dialogs";

export function onNavigatedTo(args) {
    /*
    // >> dialog-login-web-ts
    login("Your message", "Username", "Password").then((r) => {
        console.log("Dialog result: ", r.result);
        console.log(`User: ${r.userName}  Password: ${r.password}`, r.userName, r.password);
    });
    // << dialog-login-web-ts
    */

    showLoginDialog();
}

export function showLoginDialog() {
    // >> dialog-login-ts
    // import { login, LoginOptions } from "tns-core-modules/ui/dialogs";
    const loginOptions: LoginOptions = {
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
    // << dialog-login-ts
}
