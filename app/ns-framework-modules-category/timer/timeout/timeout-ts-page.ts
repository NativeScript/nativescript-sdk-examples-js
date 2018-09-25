import { Observable } from "tns-core-modules/data/observable";
import { Color } from "tns-core-modules/color";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";

let counter = 1;
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    vm.set("counter", counter);
    page.bindingContext = vm;
}

export function increase(args) {
    const button: Button = <Button>args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    setTimeout(() => {
        vm.set("counter", counter++);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
}

export function decrease(args) {
    const button: Button = <Button>args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    // >> settimeout-timer-code-ts
    setTimeout(() => {
        vm.set("counter", counter--);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
    // << settimeout-timer-code-ts
}
