"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
var http_1 = require("tns-core-modules/http");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("getStringResultButton", "Show getString result");
    vm.set("getStringResultVisible", false);
    vm.set("getJSONResultButton", "Show getJSON result");
    vm.set("getJSONResultVisible", false);
    vm.set("getImageResultButton", "Show getImage result");
    vm.set("getImageResultVisible", false);
    vm.set("statusCodeResultButton", "Show statusCode result");
    vm.set("statusCodeResult", "");
    vm.set("statusCodeResultVisible", false);
    vm.set("responseHeadersResultButton", "Show responseHeaders result");
    vm.set("responseHeadersResultVisible", false);
    vm.set("responseContentResultButton", "Show responseContent result");
    vm.set("responseContentResultVisible", false);
    vm.set("getFileResultButton", "Show getFile result");
    vm.set("getFileResultVisible", false);
    vm.set("getFileWithPathResultButton", "Show getFileWithPath result");
    vm.set("getFileWithPathResultVisible", false);
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
            case "getImage":
                getImageExample(vm);
                break;
            case "statusCode":
                getResponseStatusCodeExample(vm);
                break;
            case "responseHeaders":
                getResponseHeadersExample(vm);
                break;
            case "responseContent":
                getResponseContentExample(vm);
                break;
            case "getFile":
                getFileExample(vm);
                break;
            case "getFileWithPath":
                getFileWithPathExample(vm);
                break;
            default:
                break;
        }
    }
    switch (!status) {
        case true:
            vm.set(id + "ResultButton", "Hide " + id + " result");
            break;
        case false:
            vm.set(id + "ResultButton", "Show " + id + " result");
            break;
        default:
            break;
    }
    vm.set(id + "ResultVisible", !status);
}
exports.onButtonTap = onButtonTap;
function getStringExample(viewModel) {
    http_1.getString("https://httpbin.org/get").then(function (r) {
        viewModel.set("getStringResult", r);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getJSONExample(viewModel) {
    http_1.getJSON("https://httpbin.org/get").then(function (r) {
        viewModel.set("host", r.headers.Host);
        viewModel.set("userAgent", r.headers["User-Agent"]);
        viewModel.set("origin", r.origin);
        viewModel.set("url", r.url);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getImageExample(viewModel) {
    http_1.getImage("https://httpbin.org/image/jpeg").then(function (r) {
        viewModel.set("getImageResult", r);
        viewModel.set("imageWidth", r.width);
        viewModel.set("imageHeight", r.height);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseStatusCodeExample(viewModel) {
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        var statusCode = response.statusCode;
        viewModel.set("statusCodeResult", statusCode);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        viewModel.set("contentType", response.headers["Content-Type"]);
        viewModel.set("date", response.headers.Date);
        viewModel.set("server", response.headers.Server);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseContentExample(viewModel) {
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        var str = response.content.toString();
        viewModel.set("responseContentResult", str);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getFileExample(viewModel) {
    http_1.getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/tests/app/logo.png").then(function (resultFile) {
        viewModel.set("name", resultFile.name);
        viewModel.set("extension", resultFile.extension);
        viewModel.set("path", resultFile.path);
        viewModel.set("getFileResult", resultFile.path);
        viewModel.set("getFileImageWidth", 72);
        viewModel.set("getFileImageHeight", 72);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getFileWithPathExample(viewModel) {
    var filePath = file_system_1.path.join(file_system_1.knownFolders.currentApp().path, "test.png");
    http_1.getFile("https://httpbin.org/image/png?testQuery=query&anotherParam=param", filePath).then(function (resultFile) {
        viewModel.set("name_get_file_with_path", resultFile.name);
        viewModel.set("extension_get_file_with_path", resultFile.extension);
        viewModel.set("path_get_file_with_path", resultFile.path);
        viewModel.set("getFileWithPathResult", resultFile.path);
        viewModel.set("getFileWithPathImageWidth", 100);
        viewModel.set("getFileWithPathHeight", 100);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
