import { Observable } from "@nativescript/core";
const vm = new Observable();

export function onNavigatingTo(args) {
    const page = args.object;
    vm.set("counter", 0);
}


// >> button-tap-event
export function onTap(args) {
    const button = args.object;
    // >> (hide)
    let count = vm.get("counter");
    vm.set("counter", ++count);
    // << (hide)
    alert(`Tapped ${count} times!`);
}

// << button-tap-event
