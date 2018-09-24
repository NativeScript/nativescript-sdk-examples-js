// >> gest-pan-ts
import { PanGestureEventData } from "tns-core-modules/ui/gestures";

export function onPan(args: PanGestureEventData) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(`deltaX: ${args.deltaX}`);
    console.log(`deltaY: ${args.deltaY}`);
    console.log(`state: ${args.state}`);
}
// << gest-pan-ts
