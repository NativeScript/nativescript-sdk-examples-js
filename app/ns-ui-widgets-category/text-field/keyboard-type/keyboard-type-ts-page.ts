const observableModule = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tfDateTimeResult", "");
    vm.set("tfDateTimeText", "");
    vm.set("tfPhoneResult", "");
    vm.set("tfPhoneText", "");
    vm.set("tfNumberResult", "");
    vm.set("tfNumberText", "");
    vm.set("tfUrlResult", "");
    vm.set("tfUrlText", "");
    vm.set("tfEmailResult", "");
    vm.set("tfEmailText", "");

    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        switch (propertyChangeData.propertyName) {
            case "tfDateTimeText":
                vm.set("tfDateTimeResult", propertyChangeData.value);
                break;
            case "tfPhoneText":
                vm.set("tfPhoneResult", propertyChangeData.value);
                break;
            case "tfNumberText":
                vm.set("tfNumberResult", propertyChangeData.value);
                break;
            case "tfUrlText":
                vm.set("tfUrlResult", propertyChangeData.value);
                break;
            case "tfEmailText":
                vm.set("tfEmailResult", propertyChangeData.value);
                break;

            default:
                break;
        }
    });
    page.bindingContext = vm;
}

exports.onNavigatingTo = onNavigatingTo;
