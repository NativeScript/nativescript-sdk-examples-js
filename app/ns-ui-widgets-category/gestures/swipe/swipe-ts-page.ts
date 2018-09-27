// >> gest-swipe-ts
import { SwipeDirection, SwipeGestureEventData } from "tns-core-modules/ui/gestures";

export function onSwipe(args: SwipeGestureEventData) {

    alert(`${args.eventName} event triggered for ${args.view}`);

    let direction: SwipeDirection = args.direction;
    console.log(`direction ${direction}`); // SwipeDirection enumeration: up, down, left, right
}
// << gest-swipe-ts
