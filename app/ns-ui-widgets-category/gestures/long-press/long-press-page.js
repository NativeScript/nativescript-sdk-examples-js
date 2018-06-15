// >> gest-long-press
function onLongPress(args) {
    // args is of type GesturesEventData
    alert(`${args.eventName} gesture event triggered for ${args.view}`);
}
exports.onLongPress = onLongPress;
// << gest-long-press
