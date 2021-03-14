// >> items-actionbar-ts
import { GestureEventData } from "@nativescript/core";

export function onShare(args: GestureEventData) {
    console.log("Share tapped!");
}

export function onDelete(args: GestureEventData) {
    console.log("Delete tapped!");
}
// << items-actionbar-ts
