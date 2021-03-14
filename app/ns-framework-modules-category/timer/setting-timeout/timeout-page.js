import { Color, Observable } from "@nativescript/core";

let counter = 1;
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("counter", counter);
    page.bindingContext = vm;
}

export function increase(args) {
    const button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    setTimeout(() => {
        vm.set("counter", counter++);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
}

export function decrease(args) {
    const button = args.object;
    const vm = button.page.bindingContext;
    button.backgroundColor = new Color("#3078FE");

    // >> settimeout-timer-code
    setTimeout(() => {
        vm.set("counter", counter--);
        button.backgroundColor = new Color("#30BCFF");
    }, 1000);
    // << settimeout-timer-code
}
