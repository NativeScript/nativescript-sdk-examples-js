const observableModule = require("tns-core-modules/data/observable");
const dialogs = require("tns-core-modules/ui/dialogs");
// >> text-view-binding-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tvHint", "Enter text");
    vm.set("tvText", "");
    vm.set("tvResult", "");
    vm.set("editState", true);
    vm.set("buttonText", "Disable TextView");
    // handling TextView text change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "tvText") {
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// changing TextView editable property value on button tap
function textViewEditStateChange(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    const editState = vm.get("editState");
    vm.set("editState", !editState);
    if (editState) {
        vm.set("buttonText", "Enable TextView");
    } else {
        vm.set("buttonText", "Disable TextView");
    }
}
// displaying the TextView text in an Alert dialog
function showText(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    dialogs.alert(`Text: ${vm.get("tvText")}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}
function onTextViewLoaded(args) {
    const textView = args.object;
    textView.on("textChange", (args) => {
        console.dir(args);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.textViewEditStateChange = textViewEditStateChange;
exports.showText = showText;
exports.onTextViewLoaded = onTextViewLoaded;
// << text-view-binding-code
