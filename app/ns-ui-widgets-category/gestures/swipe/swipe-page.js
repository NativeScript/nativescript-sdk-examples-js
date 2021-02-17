import { Observable } from "@nativescript/core";
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}

// >> gest-swipe
export function onSwipe(args) {
    console.log("Swipe!");
    console.log(`Object that triggered the event: ${args.object}`);
    console.log(`View that triggered the event: ${args.view}`);
    console.log(`Event name: ${args.eventName}`);
    console.log(`Swipe Direction: ${args.direction}`);
    // >> (hide)
    const grid = args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("direction", args.direction);
    // << (hide)
}

// << gest-swipe
