import { Observable, Utils } from "@nativescript/core";
// >> require-timer
// << require-timer
const color = ["green", "yellow", "red"];
let id;
let status = true;

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("buttonText", "Disable color change");
    vm.set("buttoncolor", "gray");
    // >> set-interval-example
    id = Utils.setInterval(() => {
        const randNumber = Math.floor(Math.random() * (color.length));
        vm.set("buttoncolor", color[randNumber]);
    }, 1000);
    // << set-interval-example
    page.bindingContext = vm;
}

export function onButtonTap(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    if (status) {
    // >> clear-interval-example
        Utils.clearInterval(id);
    // << clear-interval-example
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

