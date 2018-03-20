var observableModule = require("tns-core-modules/data/observable");
let switchModule = require("tns-core-modules/ui/switch");
// >> creating-switch-code
function onPageLoaded(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("swResult", "false");
    vm.set("secure", false);
    // creating new Switch and binding the checked property
    var options = {
        sourceProperty: "enabled",
        targetProperty: "checked"
    };
    var mySwitch = new switchModule.Switch();
    mySwitch.bind(options, vm);
    // setting up mySwitch.checked to false
    vm.set("enabled", false);
    mySwitch.on("checkedChange", (args) => {
        vm.set("swResult", args.object.checked)
    })

    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-switch-code