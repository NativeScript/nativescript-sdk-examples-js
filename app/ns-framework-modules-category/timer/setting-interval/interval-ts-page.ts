import { Observable, Page } from "@nativescript/core";
// >> import-time
// Timers are exported under Utils
import { Utils } from "@nativescript/core";
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
    id = Utils.setInterval(() => {
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
        Utils.clearInterval(id);
        // << clear-interval-example-ts
        vm.set("buttonText", "Enable color change");
    } else {
        id = Utils.setInterval(() => {
            const randNumber = Math.floor(Math.random() * (color.length));
            vm.set("buttoncolor", color[randNumber]);
        }, 1000);

        vm.set("buttonText", "Disable color change");
    }
    status = !status;
}
