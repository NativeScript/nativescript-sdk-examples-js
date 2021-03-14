import { Observable } from "@nativescript/core";
// >> require-http-post
import { Http } from "@nativescript/core";
// << require-http-post

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("user", "");
    vm.set("pass", "");
    vm.set("message", "");
    vm.set("isItemVisible", false);
    page.bindingContext = vm;
}

export function makePostRequest(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> http-post
        Http.request({
            url: "https://httpbin.org/post",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                username: vm.get("user"),
                password: vm.get("pass")
            })
        }).then((response) => {
            const result = response.content.toJSON();
            // >> (hide)
            vm.set("isItemVisible", true);
            vm.set("message", result.json.username);
            // << (hide)
        }, (e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
    // << http-post
}


