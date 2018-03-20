var observableModule = require("tns-core-modules/data/observable");
let textFieldModule = require("tns-core-modules/ui/text-field")
// >> creating-text-field-code
function onPageLoaded(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    // changing TextField secure property value on button tap
    vm.set("onTap", (btargs) => {
        let secure = vm.get("secure")
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        }
        else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    // creating new TextField and binding the text property
    var options = {
        sourceProperty: "username",
        targetProperty: "text"
    }
    let firstTextField = new textFieldModule.TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    // registering for the TextField text change listener
    firstTextField.on("textChange", function (args) {
        vm.set("tfResult", args.object.text);
    })


    // creating new TextField and binding the secure property
    var secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    }
    let secondTextField = new textFieldModule.TextField();
    secondTextField.bind(secondOptions, vm);

    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-text-field-code