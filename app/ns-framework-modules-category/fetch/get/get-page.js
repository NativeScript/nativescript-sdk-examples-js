import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

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

export function onButtonTap(args) {
    const button = args.object;
    const page = args.object.page;
    const vm = page.bindingContext;
    const id = button.get("id");
    const status = vm.get(`${id}ResultVisible`);

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
                vm.set(`${id}ResultVisible`, `Hide ${id} result`);
            break;
        case false:
                vm.set(`${id}ResultVisible`, `Show ${id} result`);
            break;
        default:
            break;
    }
    vm.set(`${id}ResultVisible`, !status);
}

function getStringExample(viewModel) {
    // >> get-string-code-fetch
    fetch("https://httpbin.org/get")
    .then((response) => response.text())
    .then((r) => {
        viewModel.set("getStringResult", r);
    }).catch((e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-string-code-fetch
}
function getJSONExample(viewModel) {
    // >> get-json-code-fetch
    fetch("https://httpbin.org/get")
    .then((response) => response.json())
    .then((r) => {
        // >> (hide)
        viewModel.set("host", r.headers.Host);
        viewModel.set("userAgent", r.headers["User-Agent"]);
        // << (hide)
        viewModel.set("origin", r.origin);
        viewModel.set("url", r.url);
    }).catch((err) => {
        // >> (hide)
        console.log("Error: ");
        console.log(err);
        // << (hide)
    });
    // << get-json-code-fetch
}
function getResponseStatusCodeExample(viewModel) {
    // >> request-status-code-fetch
    fetch("https://httpbin.org/get").then((response) => {
        // >> (hide)
        console.log(response);
        // << (hide)
        const status = response.status;
        viewModel.set("statusCodeResult", status);
    }).catch((err) => {
        // >> (hide)
        console.log("Error: ");
        console.log(err);
        // << (hide)
    });
    // << request-status-code-fetch
}

function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    // >> request-response-header-fetch
    fetch("https://httpbin.org/get")
    .then((r) => r.json())
    .then((response) => {
        console.log("Header");
        console.log(response);
        // >> (hide)
        viewModel.set("acceptEncoding", response.headers["Accept-Encoding"]);
        viewModel.set("userAgent", response.headers["User-Agent"]);
        viewModel.set("host", response.headers.Host);
        // << (hide)
    }).catch((e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << request-response-header-fetch
}

function getResponseFormDataExample(viewModel) {
    // >> request-response-form-data
    fetch("https://httpbin.org/get")
    .then((result) => result.formData())
    .then((response) => {
        // >> (hide)
        viewModel.set("responseFormDataResult", response);
        // << (hide)
    })
    .catch((e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << request-response-form-data
}

