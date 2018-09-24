// >> gest-pinch-ts
import { PinchGestureEventData } from "tns-core-modules/ui/gestures";

export function onPinch(args: PinchGestureEventData) {
    // args is of type PinchGestureEventData
    console.log(`scale: ${args.scale}`);
    console.log(`tate: ${args.state}`);
    console.log(`getFocusX(): ${args.getFocusX()}`);
    console.log(`getFocusY(): ${args.getFocusY()}`);
}
// << gest-pinch-ts
