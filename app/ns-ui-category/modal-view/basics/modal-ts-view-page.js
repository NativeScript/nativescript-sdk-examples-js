"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var closeCallback;
function onShownModally(args) {
    var context = args.context;
    closeCallback = args.closeCallback;
    var page = args.object;
    page.bindingContext = observable_1.fromObject(context);
}
exports.onShownModally = onShownModally;
function onLoginButtonTap(args) {
    var page = args.object.page;
    var bindingContext = page.bindingContext;
    var username = bindingContext.get("username");
    var password = bindingContext.get("password");
    closeCallback(username, password);
}
exports.onLoginButtonTap = onLoginButtonTap;
