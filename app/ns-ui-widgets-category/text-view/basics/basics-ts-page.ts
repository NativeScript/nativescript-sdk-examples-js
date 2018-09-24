import {Observable, PropertyChangeData} from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {Page} from "tns-core-modules/ui/page";
import {TextView} from "tns-core-modules/ui/text-view";
// >> text-view-binding-code-ts
export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    vm.set("tvHint", "Enter text");
    vm.set("tvText", "");
    vm.set("tvResult", "");
    vm.set("editState", true);
    vm.set("buttonText", "Disable TextView");
    // handling TextView text change
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "tvText") {
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// changing TextView editable property value on button tap
export function textViewEditStateChange(args) {
    const page: Page = <Page> args.object.page;
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
export function showText(args) {
    const page: Page = <Page> args.object.page;
    const vm = page.bindingContext;

    dialogs.alert(`Text: ${vm.get("tvText")}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}
export function onTextViewLoaded(args) {
    const textView: TextView = <TextView>args.object;
    textView.on("textChange", (argstv) => {
        console.dir(argstv);
    });
}
// << text-view-binding-code-ts
