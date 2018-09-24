"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var text_field_1 = require("tns-core-modules/ui/text-field");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    vm.set("onTap", function (btargs) {
        var secure = vm.get("secure");
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        }
        else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    var options = {
        sourceProperty: "username",
        targetProperty: "text"
    };
    var firstTextField = new text_field_1.TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    firstTextField.on("textChange", function (argstf) {
        vm.set("tfResult", argstf.object.text);
    });
    var secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    };
    var secondTextField = new text_field_1.TextField();
    secondTextField.bind(secondOptions, vm);
    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
