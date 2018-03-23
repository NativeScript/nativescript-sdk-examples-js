// >> gest-pan
function onPan(args) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.deltaX: ", args.deltaX);
    console.log("args.deltaY: ", args.deltaY);
}
exports.onPan = onPan;
// << gest-pan
