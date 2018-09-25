// tslint:disable:max-line-length
import { Observable } from "tns-core-modules/data/observable";
import { path, knownFolders, File } from "tns-core-modules/file-system";
import { Page } from "tns-core-modules/ui/page";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { Button } from "tns-core-modules/ui/button";
import { ImageSource } from "tns-core-modules/image-source";

export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
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

export function onButtonTap(args) {
    const button: Button = <Button>args.object;
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const id: string = button.get("id");
    const status: boolean = vm.get(`${id}ResultVisible`);

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
    // >> get-string-code-ts
    getString("https://httpbin.org/get").then((r: string) => {
        viewModel.set("getStringResult", r);
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    // << get-string-code-ts
}
function getJSONExample(viewModel) {
    // >> get-json-code-ts
    getJSON("https://httpbin.org/get").then((r: any) => {
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
    // << get-json-code-ts
}
function getImageExample(viewModel) {
    // >> get-image-code-ts
    getImage("https://httpbin.org/image/jpeg").then((r: ImageSource) => {
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
    // << get-image-code-ts
}

function getResponseStatusCodeExample(viewModel) {
    // >> request-status-code-ts
    request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response: HttpResponse) => {
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
    // << request-status-code-ts
}

function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    // >> request-response-header-ts
    request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response: HttpResponse) => {
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
    // << request-response-header-ts
}

function getResponseContentExample(viewModel) {
    // >> request-response-content-ts
    request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then((response: HttpResponse) => {
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
    // << request-response-content-ts
}

function getFileExample(viewModel) {
    // >> get-file-code-ts
    getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/tests/app/logo.png").then((resultFile) => {
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
    // << get-file-code-ts
}

function getFileWithPathExample(viewModel) {
    // >> get-file-code-with-path-ts
    const filePath: string = path.join(knownFolders.currentApp().path, "test.png");
    getFile("https://httpbin.org/image/png?testQuery=query&anotherParam=param", filePath).then((resultFile: File) => {
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
    // << get-file-code-with-path-ts
}
