import { Observable } from "tns-core-modules/data/observable";

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
    // >> fetch-post-ts
    fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: vm.get("user"),
            password: vm.get("pass")
        })
    }).then((r) => r.json())
        .then((response) => {
            const result = response.json;
            // >> (hide)
            vm.set("isItemVisible", true);
            vm.set("message", result.username);
            // << (hide)
        }).catch((e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
    // << fetch-post-ts
}
