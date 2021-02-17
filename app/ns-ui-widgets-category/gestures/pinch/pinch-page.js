import { Observable } from "@nativescript/core";
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}

const startScale = 1;
// >> gest-pinch
export function onPinch(args) {
    console.log(`Object that triggered the event: ${args.object}`);
    console.log(`View that triggered the event: ${args.view}`);
    console.log(`Event name: ${args.eventName}`);
    console.log(`Pinch scale: ${args.scale} state: ${args.state}`);
    // >> (hide)
    const grid = args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("scale", args.scale);
    vm.set("state", args.state);
    if (args.scale && args.scale !== 1) {
        const newScale = startScale * args.scale;
        grid.scaleX = newScale;
        grid.scaleY = newScale;
    }
    // << (hide)
}
// << gest-pinch
