const observableModule = require("tns-core-modules/data/observable");
// >> textfield-require
const textFieldModule = require("tns-core-modules/ui/text-field");
// << textfield-require
// >> creating-text-field-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    // changing TextField secure property value on button tap
    vm.set("onTap", (btargs) => {
        const secure = vm.get("secure");
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        } else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    // creating new TextField and binding the text property
    const options = {
        sourceProperty: "username",
        targetProperty: "text"
    };
    const firstTextField = new textFieldModule.TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    // registering for the TextField text change listener
    firstTextField.on("textChange", (args) => {

        vm.set("tfResult", args.object.text);
    });


    // creating new TextField and binding the secure property
    const secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    };
    const secondTextField = new textFieldModule.TextField();
    secondTextField.bind(secondOptions, vm);

    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-text-field-code
