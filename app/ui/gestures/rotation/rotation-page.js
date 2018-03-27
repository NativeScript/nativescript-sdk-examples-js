// >> gest-rotation
function onRotation(args) {
    // args is of type RotationGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.rotation: ", args.rotation);
    console.log("args.state: ", args.state);
}
exports.onRotation = onRotation;
// << gest-rotation
