// >> gest-long-press-ts
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onLongPress(args: GestureEventData) {
    // args is of type GesturesEventData
    alert(`${args.eventName} gesture event triggered for ${args.view}`);
}
// << gest-long-press-ts
