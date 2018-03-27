// >> gest-pinch
function onPinch(args) {
    // args is of type GestureEventDataWithState
    alert(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.scale: ", args.scale);
    console.log("args.state: ", args.state);
    console.log("args.getFocusX(): ", args.getFocusX());
    console.log("args.getFocusY(): ", args.getFocusY());
}
exports.onPinch = onPinch;
// << gest-pinch
