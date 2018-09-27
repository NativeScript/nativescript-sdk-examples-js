// >> gest-swipe
function onSwipe(args) {
    // args is of type SwipeGestureEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
    console.log(`direction ${args.direction}`); // SwipeDirection enumeration: up, down, left, right
}
exports.onSwipe = onSwipe;
// << gest-swipe
