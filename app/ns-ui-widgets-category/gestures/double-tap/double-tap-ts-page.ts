import { GridLayout } from "@nativescript/core";
// >> gest-double-tap-ts
import { GestureEventData } from "@nativescript/core";

export function onDoubleTap(args: GestureEventData) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    // >> (hide)
    let grid = <GridLayout>args.object;
    grid.rotate = 0;
    grid.animate({
        rotate: 360,
        duration: 2000
    });
    // << (hide)
}
// << gest-double-tap-ts
