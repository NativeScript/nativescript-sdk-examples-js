// >> gest-touch
function onTouch(args) {
    // args is of type TouchGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(args.action); // action: "up" | "move" | "down" | "cancel"
    console.log("getX(): ", args.getX());
    console.log("getY(): ", args.getY());
}
exports.onTouch = onTouch;
// << gest-touch
