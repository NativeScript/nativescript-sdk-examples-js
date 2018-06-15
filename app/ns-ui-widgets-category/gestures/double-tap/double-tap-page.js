// >> gest-double-tap
function onDoubleTap(args) {
    // args is of type GesturesEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
}
exports.onDoubleTap = onDoubleTap;
// << gest-double-tap
