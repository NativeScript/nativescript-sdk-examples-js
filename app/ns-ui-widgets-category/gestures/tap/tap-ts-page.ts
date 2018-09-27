import { alert } from "tns-core-modules/ui/dialogs";
// >> gest-tap-ts
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onTap(args: GestureEventData) {
    console.log(`${args.eventName} event triggered for ${args.view}`);
    alert(`${args.eventName} event triggered for ${args.view}`);
}
// << gest-tap-ts
