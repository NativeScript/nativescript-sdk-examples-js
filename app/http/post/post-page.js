const Observable = require("tns-core-modules/data/observable").Observable;
// >> require-http
const httpModule = require("http");
// << require-http
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("user", "");
    vm.set("pass", "");
    vm.set("message", "");
    vm.set("isItemVisible", false);
    page.bindingContext = vm;
}

function makePostRequest(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    // >> http-post
        httpModule.request({
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

exports.onNavigatingTo = onNavigatingTo;
exports.makePostRequest = makePostRequest;
