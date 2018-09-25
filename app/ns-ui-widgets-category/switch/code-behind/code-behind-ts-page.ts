import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
// >> switch-import
import { Switch } from "tns-core-modules/ui/switch";
// << switch-import

// >> creating-switch-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    // >> (hide)
    const vm = new Observable();
    vm.set("swResult", "false");
    // << (hide)
    const stackLayout: StackLayout = <StackLayout>page.getViewById("stackLayoutId");
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

    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}
 // << creating-switch-code-ts
