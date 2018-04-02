const observableModule = require("tns-core-modules/data/observable");
const dialogs = require("tns-core-modules/ui/dialogs");
// >> text-field-binding-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tfHint", "Enter text");
    vm.set("tfText", "");
    vm.set("tfResult", "");
    vm.set("secureState", false);
    vm.set("buttonText", "Enable TextField's secure");
    // handling TextField text change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "tfText") {
            vm.set("tfResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// changing TextField secure property value on button tap
function textFieldSecureStateChange(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    const secureState = vm.get("secureState");
    vm.set("secureState", !secureState);
    if (secureState) {
        vm.set("buttonText", "Enable TextField's secure");
    } else {
        vm.set("buttonText", "Disable TextField's secure");
    }
}
// displaying the TextField text in an Alert dialog
function showText(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    dialogs.alert(`Text: ${vm.get("tfText")}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.textFieldSecureStateChange = textFieldSecureStateChange;
exports.showText = showText;
// << text-field-binding-code
