import { Observable, Page, StackLayout } from "@nativescript/core";
// >> switch-import
import { Switch } from "@nativescript/core";
// << switch-import

export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("swResult", "false");
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");
    // >> creating-switch-code-ts
    // creating new Switch and binding the checked property
    const mySwitch = new Switch();
    const options = {
        sourceProperty: "isChecked",
        targetProperty: "checked"
    };
    mySwitch.bind(options, vm);
    mySwitch.on("checkedChange", (swargs) => {
        console.log((<Switch>swargs.object).checked);
        // >> (hide)
        vm.set("swResult", (<Switch>swargs.object).checked);
        // << (hide)
    });

    // setting up mySwitch.checked to true via binding
    vm.set("isChecked", true);

    // The above code is equivalent to binding via the XML
    /*
        <Switch checked="{{ isChecked }}">
    */

    // Adding the created element to already existing layout
    stackLayout.addChild(mySwitch);
    // << creating-switch-code-ts
    page.bindingContext = vm;
}
