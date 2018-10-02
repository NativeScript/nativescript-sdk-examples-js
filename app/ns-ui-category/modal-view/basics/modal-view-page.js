// >> modal-view-js
const observableModule = require("tns-core-modules/data/observable");
let closeCallback;

function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page = args.object;
    page.bindingContext = observableModule.fromObject(context);
}
exports.onShownModally = onShownModally;

function onLoginButtonTap(args) {
    const page = args.object.page;
    const bindingContext = page.bindingContext;
    const username = bindingContext.get("username");
    const password = bindingContext.get("password");
    closeCallback(username, password);
}
exports.onLoginButtonTap = onLoginButtonTap;
// << modal-view-js
