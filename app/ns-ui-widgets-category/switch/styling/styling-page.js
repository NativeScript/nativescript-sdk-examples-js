
const observableModule = require("tns-core-modules/data/observable");
// >> switch-styling-code
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("firstSwitchResult", true);
    vm.set("firstSwitch", true);
    vm.set("secondSwitchResult", false);
    vm.set("secondSwitch", false);
    vm.set("thirdSwitchResult", true);
    vm.set("thirdSwitch", true);
    // handling Switch checked change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        switch (propertyChangeData.propertyName) {
            case "firstSwitch":
                vm.set("firstSwitchResult", propertyChangeData.value);
                break;
            case "secondSwitch":
                vm.set("secondSwitchResult", propertyChangeData.value);
                break;
            case "thirdSwitch":
                vm.set("thirdSwitchResult", propertyChangeData.value);
                break;

            default:
                break;
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
// << switch-styling-code
