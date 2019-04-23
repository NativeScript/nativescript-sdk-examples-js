import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
// >> import-timer
import { setInterval, clearInterval } from "tns-core-modules/timer";
// << import-timer
const color = ["green", "yellow", "red"];
let id;
let status = true;

export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();

    vm.set("buttonText", "Disable color change");
    vm.set("buttoncolor", "gray");
    // >> set-interval-example-ts
    id = setInterval(() => {
        const randNumber = Math.floor(Math.random() * (color.length));
        vm.set("buttoncolor", color[randNumber]);
    }, 1000);
    // << set-interval-example-ts
    page.bindingContext = vm;
}

export function onButtonTap(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    if (status) {
        // >> clear-interval-example-ts
        clearInterval(id);
        // << clear-interval-example-ts
        vm.set("buttonText", "Enable color change");
    } else {
        id = setInterval(() => {
            const randNumber = Math.floor(Math.random() * (color.length));
            vm.set("buttoncolor", color[randNumber]);
        }, 1000);

        vm.set("buttonText", "Disable color change");
    }
    status = !status;
}
