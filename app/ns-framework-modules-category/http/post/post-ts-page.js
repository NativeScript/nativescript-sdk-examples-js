"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var http_1 = require("tns-core-modules/http");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("user", "");
    vm.set("pass", "");
    vm.set("message", "");
    vm.set("isItemVisible", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function makePostRequest(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    http_1.request({
        url: "https://httpbin.org/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
            username: vm.get("user"),
            password: vm.get("pass")
        })
    }).then(function (response) {
        var result = response.content.toJSON();
        vm.set("isItemVisible", true);
        vm.set("message", result.json.username);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.makePostRequest = makePostRequest;
