// >> gest-double-tap-ts
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onDoubleTap(args: GestureEventData) {
    // args is of type GesturesEventDatae
    alert(`${args.eventName} event triggered for ${args.view}`);
}
// << gest-double-tap-ts
