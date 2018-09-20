const observableModule = require("tns-core-modules/data/observable");
// >> switch-require
const switchModule = require("tns-core-modules/ui/switch");
// << switch-require

// >> creating-switch-code
function onPageLoaded(args) {
    const page = args.object;
    // >> (hide)
    const vm = new observableModule.Observable();
    vm.set("swResult", "false");
    // << (hide)
    const stackLayout = page.getViewById("stackLayoutId");
    // creating new Switch and binding the checked property
    const mySwitch = new switchModule.Switch();
    const options = {
        sourceProperty: "isChecked",
        targetProperty: "checked"
    };
    mySwitch.bind(options, vm);
    mySwitch.on("checkedChange", (args) => {
        console.log(args.object.checked);
        // >> (hide)
        vm.set("swResult", args.object.checked);
        // << (hide)
    });

    // setting up mySwitch.checked to true via binding
    vm.set("isChecked", true);

    // The above code is equivalent to binding via the XML
    /*
        <Switch checked="{{ isChecked }}">
    */

    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
 // << creating-switch-code

