import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Switch } from "tns-core-modules/ui/switch";
export function onPageLoaded(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("secondSwitchState", "ON");
    // >> switch-checked-change-event-ts
    // set up the initial values for the switch components
    const mySwitch: Switch = <Switch>page.getViewById("my-switch");
    mySwitch.on("checkedChange", (swargs) => {
        console.log("checkedChange ", (<Switch>swargs.object).checked);
        // >> (hide)
        if ((<Switch>swargs.object).checked) {
            vm.set("secondSwitchState", "ON");
        } else {
            vm.set("secondSwitchState", "OFF");
        }
        // << (hide)
    });
    // << switch-checked-change-event-ts
    page.bindingContext = vm;
}
