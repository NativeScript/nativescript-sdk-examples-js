const Observable = require("tns-core-modules/data/observable").Observable;
const fileSystemModule = require("tns-core-modules/file-system");

const httpModule = require("tns-core-modules/http");

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

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

function onButtonTap(args) {
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
                vm.set(`${id}ResultButton`, `Hide ${id} result`);
            break;
        case false:
                vm.set(`${id}ResultButton`, `Show ${id} result`);
            break;
        default:
            break;
    }
    vm.set(`${id}ResultVisible`, !status);
}

function getStringExample(viewModel) {
    // >> get-string-code
    httpModule.getString("https://httpbin.org/get").then((r) => {
        viewModel.set("getStringResult", r);
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-string-code
}
function getJSONExample(viewModel) {
    // >> get-json-code
    httpModule.getJSON("https://httpbin.org/get").then((r) => {
        // >> (hide)
        viewModel.set("host", r.headers.Host);
        viewModel.set("userAgent", r.headers["User-Agent"]);
        viewModel.set("origin", r.origin);
        viewModel.set("url", r.url);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-json-code
}
function getImageExample(viewModel) {
    // >> get-image-code
    httpModule.getImage("https://httpbin.org/image/jpeg").then((r) => {
        // getImage method returns ImageSource object
        // >> (hide)
        viewModel.set("getImageResult", r);
        viewModel.set("imageWidth", r.width);
        viewModel.set("imageHeight", r.height);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-image-code
}

function getResponseStatusCodeExample(viewModel) {
    // >> request-status-code
    httpModule.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response) => {
        // Argument (response) is HttpResponse
        // >> (hide)
        const statusCode = response.statusCode;
        viewModel.set("statusCodeResult", statusCode);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << request-status-code
}

function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    // >> request-response-header
    httpModule.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response) => {
        // Argument (response) is HttpResponse
        // >> (hide)
        viewModel.set("contentType", response.headers["Content-Type"]);
        viewModel.set("date", response.headers.Date);
        viewModel.set("server", response.headers.Server);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << request-response-header
}

function getResponseContentExample(viewModel) {
    // >> request-response-content
    httpModule.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response) => {
        // Content property of the response is HttpContent
        // The toString method allows you to get the response body as string.
        const str = response.content.toString();
        // >> (hide)
        viewModel.set("responseContentResult", str);
        // << (hide)
        // The toJSON method allows you to parse the received content to JSON object
        // var obj = response.content.toJSON();
        // The toImage method allows you to get the response body as ImageSource.
        // var img = response.content.toImage();
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << request-response-content
}

function getFileExample(viewModel) {
    // >> get-file-code
    httpModule.getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/tests/app/logo.png").then((resultFile) => {
        // The returned result will be File object
        // >> (hide)
        viewModel.set("name", resultFile.name);
        viewModel.set("extension", resultFile.extension);
        viewModel.set("path", resultFile.path);
        viewModel.set("getFileResult", resultFile.path);
        viewModel.set("getFileImageWidth", 72);
        viewModel.set("getFileImageHeight", 72);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-file-code
}

function getFileWithPathExample(viewModel) {
    // >> get-file-code-with-path
    const filePath = fileSystemModule.path.join(fileSystemModule.knownFolders.currentApp().path, "test.png");
    httpModule.getFile("https://httpbin.org/image/png?testQuery=query&anotherParam=param", filePath).then((resultFile) => {
        // The returned result will be File object
        // >> (hide)
        viewModel.set("name_get_file_with_path", resultFile.name);
        viewModel.set("extension_get_file_with_path", resultFile.extension);
        viewModel.set("path_get_file_with_path", resultFile.path);
        viewModel.set("getFileWithPathResult", resultFile.path);
        viewModel.set("getFileWithPathImageWidth", 100);
        viewModel.set("getFileWithPathHeight", 100);
        // << (hide)
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-file-code-with-path
}

exports.onNavigatingTo = onNavigatingTo;
exports.onButtonTap = onButtonTap;
