import { Button, EventData, Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("counter", 0);
    page.bindingContext = vm;
}

// >> button-tap-event-ts
export function onTap(args: EventData) {
    const button = <Button>args.object;
    // >> (hide)
    const vm = button.page.bindingContext;
    let count = vm.get("counter");
    vm.set("counter", ++count);
    // << (hide)
    alert("Tapped " + count + " times!");
}
// << button-tap-event-ts
