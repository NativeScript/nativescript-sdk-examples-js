import {Observable, PropertyChangeData} from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
// >> text-field-binding-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    vm.set("tfHint", "Enter text");
    vm.set("tfText", "");
    vm.set("tfResult", "");
    vm.set("secureState", false);
    vm.set("buttonText", "Enable TextField's secure");
    // handling TextField text change
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "tfText") {
            vm.set("tfResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// changing TextField secure property value on button tap
export function textFieldSecureStateChange(args) {
    const page: Page = <Page> args.object.page;
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
export function showText(args) {
    const page: Page = <Page> args.object.page;
    const vm = page.bindingContext;
    dialogs.alert(`Text: ${vm.get("tfText")}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}
// << text-field-binding-code-ts
