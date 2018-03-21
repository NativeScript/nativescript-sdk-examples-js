const observableModule = require("tns-core-modules/data/observable");
// >> switch-require
const switchModule = require("tns-core-modules/ui/switch");
// << switch-require
// >> creating-switch-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("swResult", "false");
    vm.set("secure", false);
    // creating new Switch and binding the checked property
    const options = {
        sourceProperty: "enabled",
        targetProperty: "checked"
    };
    const mySwitch = new switchModule.Switch();
    mySwitch.bind(options, vm);
    // setting up mySwitch.checked to false
    vm.set("enabled", false);
    mySwitch.on("checkedChange", (args) => {
        vm.set("swResult", args.object.checked);
    });

    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-switch-code
