// >> gest-touch-ts
import {
    TouchAction,
    TouchGestureEventData
} from "tns-core-modules/ui/gestures";

export function onTouch(args: TouchGestureEventData) {
    console.log(`${args.eventName} event triggered for ${args.view}`);
    let action = args.action;
    switch (action) {
        case TouchAction.cancel:
            console.log("canceled");
            break;
        case TouchAction.down:
            console.log("Down!");
            break;
        case TouchAction.up:
            console.log("Up!");
            break;
        case TouchAction.move:
            console.log("Moving");
            break;
        default:
            break;
    }
    console.log("getX(): ", args.getX());
    console.log("getY(): ", args.getY());
}
// << gest-touch-ts
