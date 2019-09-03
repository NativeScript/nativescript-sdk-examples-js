// >> items-actionbar-ts
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onShare(args: GestureEventData) {
    console.log("Share tapped!");
}

export function onDelete(args: GestureEventData) {
    console.log("Delete tapped!");
}
// << items-actionbar-ts
