// >> gest-rotation-ts
import { RotationGestureEventData } from "tns-core-modules/ui/gestures";

export function onRotation(args: RotationGestureEventData) {
    // args is of type RotationGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(`rotation:  ${args.rotation}`);
    console.log(`state:  ${args.state}`);
}
// << gest-rotation-ts
