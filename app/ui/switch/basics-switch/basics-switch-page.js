const observableModule = require("tns-core-modules/data/observable");
// >> switch-checked-change-event
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the switch components
    const vm = new observableModule.Observable();
    vm.set("buttonText", "Disable first switch");
    vm.set("firstSwitchState", "OFF");
    vm.set("secondSwitchState", "ON");
    vm.set("firstSwitch", false);
    vm.set("secondSwitch", true);
    vm.set("isEnabledSwitch", true);
    // handle checked change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "firstSwitch") {
            if (propertyChangeData.value) {
                vm.set("firstSwitchState", "ON");
            }
            else {
                vm.set("firstSwitchState", "OFF");
            }
        }
    });
    page.bindingContext = vm;
}
// handle checked change
function switchLoaded(args) {
    const switchComponent = args.object;
    switchComponent.on("checkedChange", (sargs) => {
        console.log("checkedChange ", sargs.object.checked);
        const page = sargs.object.page;
        const vm = page.bindingContext;
        if (sargs.object.checked) {
            vm.set("secondSwitchState", "ON");
        }
        else {
            vm.set("secondSwitchState", "OFF");
        }
    });
}
// setting up isEnabled property
function onTap(args) {
    const page = args.object;
    const vm = page.bindingContext;
    const isEnabledSwitch = vm.get("isEnabledSwitch");
    vm.set("isEnabledSwitch", !isEnabledSwitch);
    if (isEnabledSwitch) {
        vm.set("buttonText", "Enable first switch");
    }
    else {
        vm.set("buttonText", "Disable first switch");
    }
}

exports.switchLoaded = switchLoaded;
exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
// << switch-checked-change-event
