// >> gest-double-tap
function onDoubleTap(args) {
    console.log(`Object that triggered the event: ${args.object}`);
    console.log(`View that triggered the event: ${args.view}`);
    console.log(`Event name: ${args.eventName}`);
    // >> (hide)
    const grid = args.object;
    grid.rotate = 0;
    grid.animate({
        rotate: 360,
        duration: 2000
    });
    // << (hide)
}
exports.onDoubleTap = onDoubleTap;
// << gest-double-tap
