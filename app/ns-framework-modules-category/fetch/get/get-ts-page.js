"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("getStringResultButton", "Show getString result");
    vm.set("getStringResultVisible", false);
    vm.set("getJSONResultButton", "Show getJSON result");
    vm.set("getJSONResultVisible", false);
    vm.set("statusCodeResultButton", "Show statusCode result");
    vm.set("statusCodeResult", "");
    vm.set("statusCodeResultVisible", false);
    vm.set("responseHeadersResultButton", "Show responseHeaders result");
    vm.set("responseHeadersResultVisible", false);
    vm.set("responseFormDataResultButton", "Show responseFormData result");
    vm.set("responseFormDataResultVisible", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onButtonTap(args) {
    var button = args.object;
    var page = args.object.page;
    var vm = page.bindingContext;
    var id = button.get("id");
    var status = vm.get(id + "ResultVisible");
    if (!status) {
        switch (id) {
            case "getString":
                getStringExample(vm);
                break;
            case "getJSON":
                getJSONExample(vm);
                break;
            case "statusCode":
                getResponseStatusCodeExample(vm);
                break;
            case "responseHeaders":
                getResponseHeadersExample(vm);
                break;
            case "responseFormData":
                getResponseFormDataExample(vm);
                break;
            default:
                break;
        }
    }
    switch (!status) {
        case true:
            vm.set(id + "ResultVisible", "Hide " + id + " result");
            break;
        case false:
            vm.set(id + "ResultVisible", "Show " + id + " result");
            break;
        default:
            break;
    }
    vm.set(id + "ResultVisible", !status);
}
exports.onButtonTap = onButtonTap;
function getStringExample(viewModel) {
    fetch("https://httpbin.org/get")
        .then(function (response) { return response.text(); })
        .then(function (r) {
        viewModel.set("getStringResult", r);
    }).catch(function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.getStringExample = getStringExample;
function getJSONExample(viewModel) {
    fetch("https://httpbin.org/get")
        .then(function (response) { return response.json(); })
        .then(function (r) {
        viewModel.set("host", r.headers.Host);
        viewModel.set("userAgent", r.headers["User-Agent"]);
        viewModel.set("origin", r.origin);
        viewModel.set("url", r.url);
    }).catch(function (err) {
        console.log("Error: ");
        console.log(err);
    });
}
exports.getJSONExample = getJSONExample;
function getResponseStatusCodeExample(viewModel) {
    fetch("https://httpbin.org/get").then(function (response) {
        console.log(response);
        var status = response.status;
        viewModel.set("statusCodeResult", status);
    }).catch(function (err) {
        console.log("Error: ");
        console.log(err);
    });
}
exports.getResponseStatusCodeExample = getResponseStatusCodeExample;
function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    fetch("https://httpbin.org/get")
        .then(function (r) { return r.json(); })
        .then(function (response) {
        console.log("Header");
        console.log(response);
        viewModel.set("acceptEncoding", response.headers["Accept-Encoding"]);
        viewModel.set("userAgent", response.headers["User-Agent"]);
        viewModel.set("host", response.headers.Host);
    }).catch(function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.getResponseHeadersExample = getResponseHeadersExample;
function getResponseFormDataExample(viewModel) {
    fetch("https://httpbin.org/get")
        .then(function (result) { return result.formData(); })
        .then(function (response) {
        viewModel.set("responseFormDataResult", response);
    })
        .catch(function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.getResponseFormDataExample = getResponseFormDataExample;
