// >> gest-pinch
function onPinch(args) {
    // args is of type PinchGestureEventData
    console.log(`scale: ${args.scale}`);
    console.log(`tate: ${args.state}`);
    console.log(`getFocusX(): ${args.getFocusX()}`);
    console.log(`getFocusY(): ${args.getFocusY()}`);
}
exports.onPinch = onPinch;
// << gest-pinch
