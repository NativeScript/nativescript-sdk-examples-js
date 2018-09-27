import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

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
    button.text = `Tapped ${count} times`;
}
// << button-tap-event-ts
