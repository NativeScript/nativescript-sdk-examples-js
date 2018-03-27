// >> gest-tap
function onTap(args) {
    // args is of type GestureEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
}
exports.onTap = onTap;
// << gest-tap
