import { Observable } from "@nativescript/core";

// >> gest-pan
export function onPan(args) {
    // args is of type PanGestureEventData
    console.log(`Object that triggered the event: ${args.object}`);
    console.log(`View that triggered the event: ${args.view}`);
    console.log(`Event name: ${args.eventName}`);
    console.log(`Pan delta: [ ${args.deltaX}, ${args.deltaY} ] state: ${args.state}`);

    // >> (hide)
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("deltaX", args.deltaX);
    vm.set("deltaY", args.deltaY);
    vm.set("state", args.state);
    // << (hide)
}
// << gest-pan

export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}

